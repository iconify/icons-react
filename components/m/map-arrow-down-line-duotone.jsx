import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c9wz-yb5v.css';
import '../../css/v/veb6ffoef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c9wz-yb5v"/><path class="veb6ffoef"/></g>`,
		"fallback": "solar:map-arrow-down-line-duotone",
	});
}

export default Component;
