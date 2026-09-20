import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf2xa4bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf2xa4bju"/>`,
		"fallback": "thesvg-color:seatgeek",
	});
}

export default Component;
