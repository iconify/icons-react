import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m17_tbbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m17_tbbqh"/>`,
		"fallback": "solar:square-arrow-right-up-outline",
	});
}

export default Component;
