import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/x/xykemkb8v.css';
import '../../css/s/st89ppb6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="xykemkb8v"/><path class="st89ppb6y"/></g>`,
		"fallback": "catppuccin:log",
	});
}

export default Component;
