import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zat5fobrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zat5fobrv"/>`,
		"fallback": "lucide:ticket-minus",
	});
}

export default Component;
