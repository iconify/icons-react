import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho73ds0za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ho73ds0za"/>`,
		"fallback": "bxl:replit",
	});
}

export default Component;
