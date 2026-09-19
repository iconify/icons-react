import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0j3robyd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0j3robyd"/>`,
		"fallback": "fa6-brands:uikit",
	});
}

export default Component;
