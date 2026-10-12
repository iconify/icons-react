import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0xspacmf.css';
import '../../css/u/uuypzlbxj.css';
import '../../css/t/teap1u0-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0xspacmf"/><path class="uuypzlbxj"/><path class="teap1u0-l"/></g>`,
		"fallback": "andrsrxn:ticket",
	});
}

export default Component;
