import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdc383b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdc383b_u"/>`,
		"fallback": "mdi:ray-start-vertex-end",
	});
}

export default Component;
