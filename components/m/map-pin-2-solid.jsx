import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5r3cacbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5r3cacbp"/>`,
		"fallback": "iconaut:map-pin-2-solid",
	});
}

export default Component;
