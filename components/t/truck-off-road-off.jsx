import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg06_ub1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg06_ub1w"/>`,
		"fallback": "mdi:truck-off-road-off",
	});
}

export default Component;
