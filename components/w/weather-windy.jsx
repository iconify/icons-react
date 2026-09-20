import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk9hffbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk9hffbqs"/>`,
		"fallback": "mdi:weather-windy",
	});
}

export default Component;
