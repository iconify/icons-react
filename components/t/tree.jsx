import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmrz6i3rp.css';
import '../../css/j/jqhbu_boi.css';
import '../../css/e/evtf7tr-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 4.93 1.7)" class="fmrz6i3rp"/><rect transform="matrix(0 1 1 0 4.93 1.7)" class="jqhbu_boi"/><path class="evtf7tr-b"/></g>`,
		"fallback": "andrsrxn:tree",
	});
}

export default Component;
