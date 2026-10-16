import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coz7yj4ky.css';
import '../../css/i/il8ylcbwt.css';
import '../../css/e/e5l2fcw6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="coz7yj4ky"/><path class="il8ylcbwt"/><path class="e5l2fcw6v"/></g>`,
		"fallback": "andrsrxn:moon-waves",
	});
}

export default Component;
