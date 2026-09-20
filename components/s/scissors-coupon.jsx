import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hog2xxb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hog2xxb1q"/>`,
		"fallback": "reicon:scissors-coupon",
	});
}

export default Component;
