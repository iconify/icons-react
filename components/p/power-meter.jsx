import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6ir69grh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6ir69grh"/>`,
		"fallback": "mdi:power-meter",
	});
}

export default Component;
