import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oum9p75_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oum9p75_m"/>`,
		"fallback": "mdi:smartphone-android",
	});
}

export default Component;
