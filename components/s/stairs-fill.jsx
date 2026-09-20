import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb-f-i0ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb-f-i0ey"/>`,
		"fallback": "ri:stairs-fill",
	});
}

export default Component;
