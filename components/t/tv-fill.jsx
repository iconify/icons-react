import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swzhgrbza.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swzhgrbza"/>`,
		"fallback": "f7:tv-fill",
	});
}

export default Component;
