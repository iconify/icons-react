import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu_3bybmc.css';
import '../../css/k/ki8ztfb6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu_3bybmc"/><path clip-rule="evenodd" class="ki8ztfb6v"/>`,
		"fallback": "basil:skip-prev-outline",
	});
}

export default Component;
