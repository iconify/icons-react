import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9svkd5iy.css';
import '../../css/m/m5wg2ub_n.css';
import '../../css/l/lgigiqbja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9svkd5iy"/><path class="m5wg2ub_n"/><path class="lgigiqbja"/>`,
		"fallback": "energy-icons:solar-cell-20-bold",
	});
}

export default Component;
