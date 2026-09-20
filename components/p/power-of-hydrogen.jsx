import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_vp0ma3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_vp0ma3m"/>`,
		"fallback": "mdi:power-of-hydrogen",
	});
}

export default Component;
