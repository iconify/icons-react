import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x34ulpd6c.css';
import '../../css/r/r1p2ovmti.css';
import '../../css/y/yyoig7bnu.css';
import '../../css/z/zp8fjxjrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x34ulpd6c"/><path class="r1p2ovmti"/><path class="yyoig7bnu"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/></g>`,
		"fallback": "andrsrxn:music-notes-square",
	});
}

export default Component;
