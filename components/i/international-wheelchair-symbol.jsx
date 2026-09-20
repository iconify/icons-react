import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujz8hjb_e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujz8hjb_e"/>`,
		"fallback": "pinhead:international-wheelchair-symbol",
	});
}

export default Component;
