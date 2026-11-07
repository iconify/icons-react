import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx1_rzvjt.css';
import '../../css/c/cp3lf9pre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx1_rzvjt"/><path clip-rule="evenodd" class="cp3lf9pre"/>`,
		"fallback": "solar:shield-keyhole-minimalistic-bold",
	});
}

export default Component;
