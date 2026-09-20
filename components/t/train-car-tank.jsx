import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ld3yycm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ld3yycm"/>`,
		"fallback": "mdi:train-car-tank",
	});
}

export default Component;
