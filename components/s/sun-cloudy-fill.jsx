import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7fttbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl7fttbwf"/>`,
		"fallback": "ri:sun-cloudy-fill",
	});
}

export default Component;
