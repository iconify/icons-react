import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm_kv8bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm_kv8bri"/>`,
		"fallback": "ri:police-car-line",
	});
}

export default Component;
