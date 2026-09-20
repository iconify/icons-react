import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0d_yj6xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0d_yj6xx"/>`,
		"fallback": "thesvg-color:vectary",
	});
}

export default Component;
