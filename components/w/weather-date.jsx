import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktku_nbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktku_nbzg"/>`,
		"fallback": "mdi:weather-date",
	});
}

export default Component;
