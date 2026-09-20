import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjm4s4brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjm4s4brz"/>`,
		"fallback": "mdi:textsms",
	});
}

export default Component;
