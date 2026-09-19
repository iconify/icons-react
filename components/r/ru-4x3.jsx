import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbsiz1bro.css';
import '../../css/r/rt2t23vus.css';
import '../../css/m/mav5s0-rh.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbsiz1bro"/><path class="rt2t23vus"/><path class="mav5s0-rh"/>`,
		"fallback": "flag:ru-4x3",
	});
}

export default Component;
