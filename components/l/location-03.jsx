import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a35do_bcy.css';
import '../../css/z/ziql4u_be.css';
import '../../css/l/lqjv4_f5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a35do_bcy"/><path class="ziql4u_be"/><path class="lqjv4_f5a"/></g>`,
		"fallback": "hugeicons:location-03",
	});
}

export default Component;
