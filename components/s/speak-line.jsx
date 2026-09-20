import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjq3w6t5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjq3w6t5c"/>`,
		"fallback": "ri:speak-line",
	});
}

export default Component;
