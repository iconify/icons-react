import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdmt-v1nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdmt-v1nl"/>`,
		"fallback": "circum:satellite-1",
	});
}

export default Component;
