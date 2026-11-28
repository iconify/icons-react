import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywp2qzbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywp2qzbfd"/>`,
		"fallback": "noviair:square-arrow-up",
	});
}

export default Component;
