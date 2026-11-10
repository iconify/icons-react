import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w92pms9kt.css';
import '../../css/g/g6qaa5jad.css';
import '../../css/d/du_wjmbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w92pms9kt"/><path class="g6qaa5jad"/><path class="du_wjmbiu"/></g>`,
		"fallback": "andrsrxn:vote-check",
	});
}

export default Component;
