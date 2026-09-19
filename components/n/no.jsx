import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl4emnbrr.css';
import '../../css/h/h3vjndsnd.css';
import '../../css/l/lbkvsbcnv.css';
import '../../css/w/wg3fq-7mc.css';
import '../../css/t/t1o88tbmc.css';

const viewBox = {"width":301,"height":219};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rl4emnbrr"/><path class="h3vjndsnd"/><path class="lbkvsbcnv"/><path class="wg3fq-7mc"/><path class="t1o88tbmc"/></g>`,
		"fallback": "cif:no",
	});
}

export default Component;
