import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy0b-_gxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy0b-_gxm"/>`,
		"fallback": "mdi:relative-scale",
	});
}

export default Component;
