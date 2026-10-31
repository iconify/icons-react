import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl6s61bvu.css';
import '../../css/u/ube40h2rt.css';
import '../../css/h/h6nciubjn.css';
import '../../css/j/j6m5kjbje.css';
import '../../css/n/nk2afbb1t.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tl6s61bvu"/><circle class="ube40h2rt"/><circle class="h6nciubjn"/><circle class="j6m5kjbje"/><path class="nk2afbb1t"/></g>`,
		"fallback": "cif:tn",
	});
}

export default Component;
