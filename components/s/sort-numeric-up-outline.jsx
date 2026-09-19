import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khq2vx_5t.css';
import '../../css/h/hr5o_kbdf.css';
import '../../css/b/bpq47ib3p.css';
import '../../css/c/c3d46eb9c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khq2vx_5t"/><path clip-rule="evenodd" class="hr5o_kbdf"/><path class="bpq47ib3p"/><path clip-rule="evenodd" class="c3d46eb9c"/></g>`,
		"fallback": "glyphs:sort-numeric-up-outline",
	});
}

export default Component;
