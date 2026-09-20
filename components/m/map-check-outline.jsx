import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpx25pbdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpx25pbdj"/>`,
		"fallback": "mdi:map-check-outline",
	});
}

export default Component;
