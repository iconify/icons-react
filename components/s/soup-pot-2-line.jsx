import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu4p4krzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu4p4krzp"/>`,
		"fallback": "mingcute:soup-pot-2-line",
	});
}

export default Component;
