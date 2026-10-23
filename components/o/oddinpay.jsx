import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc87pduwj.css';

const viewBox = {"width":35,"height":35};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc87pduwj"/>`,
		"fallback": "thesvg-color:oddinpay",
	});
}

export default Component;
