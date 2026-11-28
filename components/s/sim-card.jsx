import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxs1s4jzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxs1s4jzm"/>`,
		"fallback": "noviair-light:sim-card",
	});
}

export default Component;
