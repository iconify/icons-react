import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knl5nbbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knl5nbbgc"/>`,
		"fallback": "iconoir:swipe-two-fingers-right-gesture",
	});
}

export default Component;
