import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp49s6dbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp49s6dbf"/>`,
		"fallback": "mdi:oil-temperature",
	});
}

export default Component;
