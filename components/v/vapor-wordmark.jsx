import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo6_k6b5l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo6_k6b5l"/>`,
		"fallback": "devicon-plain:vapor-wordmark",
	});
}

export default Component;
