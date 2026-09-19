import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsm-zmbwu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsm-zmbwu"/>`,
		"fallback": "fa6-solid:up-down-left-right",
	});
}

export default Component;
