import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwv7d3bso.css';
import '../../css/j/jro575k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rwv7d3bso"/><path class="jro575k1c"/></g>`,
		"fallback": "hugeicons:muhammad",
	});
}

export default Component;
