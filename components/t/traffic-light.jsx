import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lzvv6ryeo.css';
import '../../css/p/piq7nbcjz.css';
import '../../css/o/od0wt3bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lzvv6ryeo"/><path class="piq7nbcjz"/><path class="od0wt3bac"/></g>`,
		"fallback": "hugeicons:traffic-light",
	});
}

export default Component;
