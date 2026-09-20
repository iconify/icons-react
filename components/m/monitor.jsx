import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/romo1bcpy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="romo1bcpy"/>`,
		"fallback": "oi:monitor",
	});
}

export default Component;
