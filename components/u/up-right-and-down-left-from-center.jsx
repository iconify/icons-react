import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyux0j27g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyux0j27g"/>`,
		"fallback": "fa6-solid:up-right-and-down-left-from-center",
	});
}

export default Component;
