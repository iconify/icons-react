import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/m/m26d08bnp.css';
import '../../css/s/sxmz7tbxf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="m26d08bnp"/><path class="sxmz7tbxf"/></g>`,
		"fallback": "catppuccin:text",
	});
}

export default Component;
