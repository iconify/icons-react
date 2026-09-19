import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yei9djbtd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yei9djbtd"/>`,
		"fallback": "bi:lightbulb",
	});
}

export default Component;
