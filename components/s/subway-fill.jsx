import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaoax90by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaoax90by"/>`,
		"fallback": "ri:subway-fill",
	});
}

export default Component;
