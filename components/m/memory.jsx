import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dayz5c4na.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dayz5c4na"/>`,
		"fallback": "mdi:memory",
	});
}

export default Component;
