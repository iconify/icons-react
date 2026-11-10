import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iiwbi_z5o.css';
import '../../css/i/ioajqkbdo.css';
import '../../css/e/e15j0nbpw.css';
import '../../css/e/engyn55tx.css';
import '../../css/y/yatg6dbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iiwbi_z5o"/><path class="ioajqkbdo"/><path clip-rule="evenodd" class="e15j0nbpw"/><path class="engyn55tx"/><path class="yatg6dbvw"/></g>`,
		"fallback": "andrsrxn:passcode-check",
	});
}

export default Component;
