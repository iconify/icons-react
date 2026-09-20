import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwk7x1aeq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwk7x1aeq"/>`,
		"fallback": "pinhead:ticket-in-slot",
	});
}

export default Component;
