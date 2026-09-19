import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xov3r3xqc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xov3r3xqc"/>`,
		"fallback": "fa6-brands:square-tumblr",
	});
}

export default Component;
