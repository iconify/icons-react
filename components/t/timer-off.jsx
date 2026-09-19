import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft7_ypb2e.css';

const viewBox = {"width":416,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft7_ypb2e"/>`,
		"fallback": "zmdi:timer-off",
	});
}

export default Component;
