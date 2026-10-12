import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bld59pbwq.css';
import '../../css/u/u2xrtbbac.css';
import '../../css/k/krd881dju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bld59pbwq"/><path class="u2xrtbbac"/><path class="krd881dju"/></g>`,
		"fallback": "andrsrxn:rotate-circle",
	});
}

export default Component;
