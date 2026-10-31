import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_mu1dhnu.css';
import '../../css/l/lajv7-eit.css';
import '../../css/p/puey1gb9g.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_mu1dhnu"/><path class="lajv7-eit"/><path class="puey1gb9g"/></g>`,
		"fallback": "cif:vc",
	});
}

export default Component;
