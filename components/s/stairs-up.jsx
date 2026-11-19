import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8rolbcjq.css';
import '../../css/j/jrkqm_69a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8rolbcjq"/><path class="jrkqm_69a"/></g>`,
		"fallback": "andrsrxn:stairs-up",
	});
}

export default Component;
