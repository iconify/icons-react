import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyyfu4bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyyfu4bga"/>`,
		"fallback": "mdi:keep-outline",
	});
}

export default Component;
