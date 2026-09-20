import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1jeki3de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1jeki3de"/>`,
		"fallback": "keyline-icons:square-bar-chart-sharp-fill",
	});
}

export default Component;
