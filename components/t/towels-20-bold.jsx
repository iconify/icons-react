import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v57k_lqgn.css';
import '../../css/c/cql0n4wpe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v57k_lqgn"/><path class="cql0n4wpe"/>`,
		"fallback": "energy-icons:towels-20-bold",
	});
}

export default Component;
