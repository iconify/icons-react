import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esiznkb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esiznkb1t"/>`,
		"fallback": "iconoir:swipe-two-fingers-up-gesture",
	});
}

export default Component;
