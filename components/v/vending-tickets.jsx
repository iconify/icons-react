import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot3vn1bmt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot3vn1bmt"/>`,
		"fallback": "roentgen:vending-tickets",
	});
}

export default Component;
