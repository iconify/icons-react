import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_v0kzl5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_v0kzl5s"/>`,
		"fallback": "mdi:train-car-passenger-variant",
	});
}

export default Component;
