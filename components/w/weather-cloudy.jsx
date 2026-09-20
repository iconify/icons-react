import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee16c9d6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee16c9d6c"/>`,
		"fallback": "proicons:weather-cloudy",
	});
}

export default Component;
