import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-hk2hbee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-hk2hbee"/>`,
		"fallback": "mdi:raster",
	});
}

export default Component;
