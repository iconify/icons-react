import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsl39u34c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsl39u34c"/>`,
		"fallback": "ri:restaurant-line",
	});
}

export default Component;
