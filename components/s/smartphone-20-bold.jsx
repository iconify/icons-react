import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkuaw6bpa.css';
import '../../css/e/e1qe98bwh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkuaw6bpa"/><path class="e1qe98bwh"/>`,
		"fallback": "energy-icons:smartphone-20-bold",
	});
}

export default Component;
