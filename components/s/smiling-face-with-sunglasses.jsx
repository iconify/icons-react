import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/p/pkyq7x4rs.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/fs6svzbeu.css';
import '../../css/e/ecyl9ut8r.css';
import '../../css/k/k03z_0bbe.css';
import '../../css/l/lh36uxqgz.css';
import '../../css/c/cfdi6v-te.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="pkyq7x4rs"/><g class="ij2x_72vy"><circle class="fs6svzbeu"/><path class="ecyl9ut8r"/><path class="k03z_0bbe"/><path class="lh36uxqgz"/><path class="cfdi6v-te"/></g>`,
		"fallback": "openmoji:smiling-face-with-sunglasses",
	});
}

export default Component;
