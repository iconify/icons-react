import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jph_z1b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jph_z1b8z"/>`,
		"fallback": "mdi:weather-sun-wireless",
	});
}

export default Component;
