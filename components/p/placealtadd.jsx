import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joalz1tbm.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joalz1tbm"/>`,
		"fallback": "whh:placealtadd",
	});
}

export default Component;
