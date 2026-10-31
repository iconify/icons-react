import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/f/fcn327o-m.css';
import '../../css/a/a_kv03c5c.css';
import '../../css/j/j-g6mgbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="fcn327o-m"/><path class="a_kv03c5c"/><path class="j-g6mgbto"/></g>`,
		"fallback": "withicons-brutal:rows",
	});
}

export default Component;
