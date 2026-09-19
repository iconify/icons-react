import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2qmt9b5w.css';

const viewBox = {"width":408,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2qmt9b5w"/>`,
		"fallback": "zmdi:view-day",
	});
}

export default Component;
