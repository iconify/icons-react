import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhklwbcuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhklwbcuu"/>`,
		"fallback": "circum:map-pin",
	});
}

export default Component;
