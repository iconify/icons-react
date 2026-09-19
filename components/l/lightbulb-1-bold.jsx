import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az-3uob_u.css';
import '../../css/y/y-v_cw-sh.css';
import '../../css/n/n3_y8obgw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="az-3uob_u"/><path class="y-v_cw-sh"/><path class="n3_y8obgw"/></g>`,
		"fallback": "glyphs:lightbulb-1-bold",
	});
}

export default Component;
