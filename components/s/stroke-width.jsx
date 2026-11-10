import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knzgp7h3e.css';
import '../../css/p/pcbw4wbhw.css';
import '../../css/f/f42dojeim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="knzgp7h3e"/><path class="pcbw4wbhw"/><path class="f42dojeim"/></g>`,
		"fallback": "andrsrxn:stroke-width",
	});
}

export default Component;
