import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nemk98b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nemk98b1b"/>`,
		"fallback": "mingcute:phone-incoming-fill",
	});
}

export default Component;
