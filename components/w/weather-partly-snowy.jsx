import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7f70rbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7f70rbdz"/>`,
		"fallback": "mdi:weather-partly-snowy",
	});
}

export default Component;
