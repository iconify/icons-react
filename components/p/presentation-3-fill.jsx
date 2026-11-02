import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwb95wbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwb95wbcs"/>`,
		"fallback": "mingcute:presentation-3-fill",
	});
}

export default Component;
