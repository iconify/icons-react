import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yahzeibjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yahzeibjy"/>`,
		"fallback": "coolicons:slider-vertical-1-fill-round",
	});
}

export default Component;
