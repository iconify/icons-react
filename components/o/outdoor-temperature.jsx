import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw2citbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw2citbwb"/>`,
		"fallback": "mdi:outdoor-temperature",
	});
}

export default Component;
