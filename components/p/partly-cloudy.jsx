import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo3l2xb1x.css';
import '../../css/m/mdqwd7bjs.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo3l2xb1x"/><path class="mdqwd7bjs"/>`,
		"fallback": "ep:partly-cloudy",
	});
}

export default Component;
