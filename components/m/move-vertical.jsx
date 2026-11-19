import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njuxs6bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njuxs6bgo"/>`,
		"fallback": "andrsrxn:move-vertical",
	});
}

export default Component;
