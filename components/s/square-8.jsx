import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihpmtnj8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihpmtnj8x"/>`,
		"fallback": "noviair-light:square-8",
	});
}

export default Component;
