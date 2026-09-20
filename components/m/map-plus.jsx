import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdbf7hbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdbf7hbli"/>`,
		"fallback": "mdi:map-plus",
	});
}

export default Component;
