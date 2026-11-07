import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miuz52b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="miuz52b1i"/>`,
		"fallback": "solar:medal-ribbons-star-outline",
	});
}

export default Component;
