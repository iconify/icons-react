import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl8yi_buk.css';
import '../../css/s/sm_73lbcr.css';
import '../../css/k/ktjmgqf7b.css';
import '../../css/w/wef-u8bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zl8yi_buk"/><rect transform="rotate(135 7.77 8.23)scale(-1 1)" class="sm_73lbcr"/><path class="ktjmgqf7b"/><path class="wef-u8bhj"/></g>`,
		"fallback": "andrsrxn:pencil-paper",
	});
}

export default Component;
