import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcx6nf7bd.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcx6nf7bd"/>`,
		"fallback": "jam:move",
	});
}

export default Component;
