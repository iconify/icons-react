import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee7w3zqxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee7w3zqxg"/>`,
		"fallback": "mingcute:scrollable-list-fill",
	});
}

export default Component;
