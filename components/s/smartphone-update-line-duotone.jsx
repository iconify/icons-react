import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yncpr3b3n.css';
import '../../css/k/khwr-plop.css';
import '../../css/g/g-ueu0ape.css';
import '../../css/l/l0yi6obcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yncpr3b3n"/><path class="khwr-plop"/><path class="g-ueu0ape"/><path class="l0yi6obcv"/></g>`,
		"fallback": "solar:smartphone-update-line-duotone",
	});
}

export default Component;
