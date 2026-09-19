import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hrnfbeujk.css';
import '../../css/m/muvmgc77q.css';
import '../../css/p/pflnjityd.css';
import '../../css/w/waagczbtf.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hrnfbeujk"/><path class="muvmgc77q"/><path class="pflnjityd"/><path class="waagczbtf"/></g>`,
		"fallback": "cif:lc",
	});
}

export default Component;
