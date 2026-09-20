import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg75l3p3r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg75l3p3r"/>`,
		"fallback": "oi:pin",
	});
}

export default Component;
