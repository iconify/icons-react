import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp702zbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp702zbeg"/>`,
		"fallback": "iconoir:swipe-left-gesture",
	});
}

export default Component;
