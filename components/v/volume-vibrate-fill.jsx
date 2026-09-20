import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi2oy9bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi2oy9bdf"/>`,
		"fallback": "ri:volume-vibrate-fill",
	});
}

export default Component;
