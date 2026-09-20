import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqal447xy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqal447xy"/>`,
		"fallback": "osmic:power-wind-14",
	});
}

export default Component;
