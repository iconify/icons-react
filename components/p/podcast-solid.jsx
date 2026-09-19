import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp5z5lbti.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv3sfkbnt.css';
import '../../css/n/nf4y_o2jc.css';
import '../../css/d/d9vtopbdi.css';
import '../../css/q/q3tk9ebaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGtrTq1bMV" class="lp5z5lbti"/></defs><g class="ft5dv1b6b"><use href="#SVGtrTq1bMV" class="rv3sfkbnt"/><use href="#SVGtrTq1bMV" class="rv3sfkbnt"/><path class="nf4y_o2jc"/><path clip-rule="evenodd" class="d9vtopbdi"/><path class="q3tk9ebaj"/></g>`,
		"fallback": "iconoir:podcast-solid",
	});
}

export default Component;
