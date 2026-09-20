import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/te85glbsz.css';
import '../../css/e/emnsetb8o.css';
import '../../css/t/ts76sqbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(-90 15 9)" class="te85glbsz"/><path class="emnsetb8o"/><path class="ts76sqbbo"/></g>`,
		"fallback": "lets-icons:line-in-alt",
	});
}

export default Component;
