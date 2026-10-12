import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfuj9nbia.css';
import '../../css/s/syye69bes.css';
import '../../css/p/p74anlbhw.css';
import '../../css/x/x7n6a3b_s.css';
import '../../css/y/y31quu63i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfuj9nbia"/><path class="syye69bes"/><path class="p74anlbhw"/><circle transform="rotate(90 19.51 17.55)" class="x7n6a3b_s"/><path class="y31quu63i"/></g>`,
		"fallback": "andrsrxn:mail-prohibit",
	});
}

export default Component;
