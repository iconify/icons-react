import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyp6jzb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyp6jzb_c"/>`,
		"fallback": "ri:pie-chart-2-fill",
	});
}

export default Component;
