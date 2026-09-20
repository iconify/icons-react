import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-i707bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-i707bco"/>`,
		"fallback": "mdi:train-car-flatbed-tank",
	});
}

export default Component;
