import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktpu1oifd.css';
import '../../css/f/fo0_yzbmr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktpu1oifd"/><path class="fo0_yzbmr"/>`,
		"fallback": "energy-icons:map-data-20-bold",
	});
}

export default Component;
