import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/iuoxlbdlv.css';
import '../../css/j/j3jueu2yb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="iuoxlbdlv"/><path class="j3jueu2yb"/></g>`,
		"fallback": "catppuccin:r",
	});
}

export default Component;
