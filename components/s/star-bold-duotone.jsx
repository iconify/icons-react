import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kka22lbso.css';
import '../../css/u/u0y1r5zna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kka22lbso"/><path class="u0y1r5zna"/>`,
		"fallback": "solar:star-bold-duotone",
	});
}

export default Component;
