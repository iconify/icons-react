import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcq1nd9yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcq1nd9yz"/>`,
		"fallback": "ri:shopping-bag-3-line",
	});
}

export default Component;
