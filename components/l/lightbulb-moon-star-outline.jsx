import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hucfk3b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hucfk3b8p"/>`,
		"fallback": "mdi:lightbulb-moon-star-outline",
	});
}

export default Component;
