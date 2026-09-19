import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqa6kvbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqa6kvbbz"/>`,
		"fallback": "ci:slider-03",
	});
}

export default Component;
