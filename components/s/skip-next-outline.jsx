import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv8-u4bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv8-u4bfa"/>`,
		"fallback": "mdi:skip-next-outline",
	});
}

export default Component;
