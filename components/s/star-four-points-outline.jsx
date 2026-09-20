import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1gz_e17x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1gz_e17x"/>`,
		"fallback": "mdi:star-four-points-outline",
	});
}

export default Component;
