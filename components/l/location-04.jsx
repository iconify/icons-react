import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r5q18ebky.css';
import '../../css/a/a35do_bcy.css';
import '../../css/l/lqjv4_f5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="r5q18ebky"/><path class="a35do_bcy"/><path class="lqjv4_f5a"/></g>`,
		"fallback": "hugeicons:location-04",
	});
}

export default Component;
