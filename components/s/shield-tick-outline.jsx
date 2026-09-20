import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk677ab6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk677ab6g"/>`,
		"fallback": "mdi:shield-tick-outline",
	});
}

export default Component;
