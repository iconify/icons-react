import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4jkmzbjk.css';
import '../../css/x/xlat1xboc.css';
import '../../css/r/rts03fbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 11.97 11.99)" class="l4jkmzbjk"/><circle transform="rotate(90 11.97 11.99)" class="xlat1xboc"/><path class="rts03fbmw"/></g>`,
		"fallback": "andrsrxn:sun-off",
	});
}

export default Component;
