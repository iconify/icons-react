import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vas90-bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vas90-bzb"/>`,
		"fallback": "ri:phone-line",
	});
}

export default Component;
