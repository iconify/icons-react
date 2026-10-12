import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at017gb0u.css';
import '../../css/n/nb488jb9h.css';
import '../../css/w/w1l3h_dpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="at017gb0u"/><path class="nb488jb9h"/><path class="w1l3h_dpv"/></g>`,
		"fallback": "andrsrxn:stroke-align-inside",
	});
}

export default Component;
