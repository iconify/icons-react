import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knrnv_33u.css';
import '../../css/u/ub4lowbdm.css';
import '../../css/t/tb6awyqzo.css';
import '../../css/z/z9c2rqbly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="knrnv_33u"/><path clip-rule="evenodd" class="ub4lowbdm"/><path clip-rule="evenodd" class="tb6awyqzo"/><path class="z9c2rqbly"/></g>`,
		"fallback": "glyphs:laptop-cog-outline",
	});
}

export default Component;
