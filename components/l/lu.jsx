import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1c9d-bth.css';
import '../../css/b/b2mvo_bdu.css';
import '../../css/y/ypl-tsp9k.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d1c9d-bth"/><path class="b2mvo_bdu"/><path class="ypl-tsp9k"/></g>`,
		"fallback": "cif:lu",
	});
}

export default Component;
