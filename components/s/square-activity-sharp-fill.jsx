import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m94-e1boj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m94-e1boj"/>`,
		"fallback": "keyline-icons:square-activity-sharp-fill",
	});
}

export default Component;
