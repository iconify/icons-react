import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnwwm778c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnwwm778c"/>`,
		"fallback": "mdi:mapbox",
	});
}

export default Component;
