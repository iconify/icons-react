import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ctyka6kni.css';
import '../../css/x/xn8dv2b4p.css';
import '../../css/s/sw67oqp7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ctyka6kni"/><path class="xn8dv2b4p"/><path class="sw67oqp7e"/></g>`,
		"fallback": "hugeicons:tank-top",
	});
}

export default Component;
