import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4bu7q8ep.css';
import '../../css/y/y_o9s-bxm.css';
import '../../css/m/m7ymjzb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x4bu7q8ep"/><path class="y_o9s-bxm"/><circle transform="rotate(90 12 8.98)" class="m7ymjzb2h"/></g>`,
		"fallback": "andrsrxn:map-pin",
	});
}

export default Component;
