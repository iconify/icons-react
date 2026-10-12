import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8lud0bbk.css';
import '../../css/o/oy5oulbhy.css';
import '../../css/j/j_e93hhyk.css';
import '../../css/m/mu603ceou.css';
import '../../css/i/izb20nb-l.css';
import '../../css/h/h1r7h2bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 1.78 9)" class="f8lud0bbk"/><path class="oy5oulbhy"/><rect transform="rotate(-90 1.78 9)" class="j_e93hhyk"/><path class="mu603ceou"/><path class="izb20nb-l"/><path class="h1r7h2bmu"/></g>`,
		"fallback": "andrsrxn:server-check",
	});
}

export default Component;
