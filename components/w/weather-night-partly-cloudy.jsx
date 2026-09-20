import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_l0clr8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_l0clr8b"/>`,
		"fallback": "mdi:weather-night-partly-cloudy",
	});
}

export default Component;
