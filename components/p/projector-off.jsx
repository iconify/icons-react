import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq50gkoiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq50gkoiq"/>`,
		"fallback": "mdi:projector-off",
	});
}

export default Component;
