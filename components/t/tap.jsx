import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/movx4_hai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="movx4_hai"/>`,
		"fallback": "mdi:tap",
	});
}

export default Component;
