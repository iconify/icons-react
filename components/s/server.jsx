import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lmmph24an.css';
import '../../css/p/pifmxvl5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lmmph24an"/><path class="pifmxvl5l"/></g>`,
		"fallback": "iconoir:server",
	});
}

export default Component;
