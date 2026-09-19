import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/s/sx9el_bjm.css';
import '../../css/i/iecyqkq9h.css';
import '../../css/e/eojgc1bbu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="sx9el_bjm"/><path class="iecyqkq9h"/><path class="eojgc1bbu"/></g>`,
		"fallback": "catppuccin:stitches",
	});
}

export default Component;
