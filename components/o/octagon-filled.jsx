import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv6chp-kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv6chp-kd"/>`,
		"fallback": "griddy-icons:octagon-filled",
	});
}

export default Component;
