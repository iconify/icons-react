import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yehyu3l8d.css';
import '../../css/m/m6mu15bsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yehyu3l8d"/><path class="m6mu15bsi"/>`,
		"fallback": "energy-icons:tide-high-48-bold",
	});
}

export default Component;
