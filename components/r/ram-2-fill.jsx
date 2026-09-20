import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq6mhac5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq6mhac5r"/>`,
		"fallback": "ri:ram-2-fill",
	});
}

export default Component;
