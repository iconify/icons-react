import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4udjm4ma.css';
import '../../css/p/pzq_i-bca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4udjm4ma"/><path class="pzq_i-bca"/>`,
		"fallback": "solar:smartphone-bold-duotone",
	});
}

export default Component;
