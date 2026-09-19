import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w5yxk8b6x.css';
import '../../css/c/cau_lwbjl.css';
import '../../css/k/knoqyn-wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w5yxk8b6x"/><path class="cau_lwbjl"/><path class="knoqyn-wa"/></g>`,
		"fallback": "hugeicons:satellite-03",
	});
}

export default Component;
