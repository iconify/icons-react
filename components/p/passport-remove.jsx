import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv8qo5c_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv8qo5c_a"/>`,
		"fallback": "mdi:passport-remove",
	});
}

export default Component;
