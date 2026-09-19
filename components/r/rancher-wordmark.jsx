import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w33oqo5oh.css';
import '../../css/c/cjcvn3b5o.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w33oqo5oh"/><path class="cjcvn3b5o"/>`,
		"fallback": "devicon:rancher-wordmark",
	});
}

export default Component;
