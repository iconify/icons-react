import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2twmofqo.css';
import '../../css/x/xsfvsus8l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2twmofqo"/><path class="xsfvsus8l"/>`,
		"fallback": "devicon:nasm-wordmark",
	});
}

export default Component;
