import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylt-5-b8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylt-5-b8c"/>`,
		"fallback": "mdi:planner-outline",
	});
}

export default Component;
