import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq_pa800o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq_pa800o"/>`,
		"fallback": "flowbite:star-half-stroke-outline",
	});
}

export default Component;
