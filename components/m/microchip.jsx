import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi435sphj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi435sphj"/>`,
		"fallback": "bx:microchip",
	});
}

export default Component;
