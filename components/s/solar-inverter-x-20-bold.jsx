import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9k69ztaq.css';
import '../../css/c/clp87tp4c.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9k69ztaq"/><path class="clp87tp4c"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:solar-inverter-x-20-bold",
	});
}

export default Component;
