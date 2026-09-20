import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8-tc6le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8-tc6le"/>`,
		"fallback": "ri:loader-5-fill",
	});
}

export default Component;
