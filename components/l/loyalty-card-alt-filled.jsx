import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izx-16bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izx-16bdk"/>`,
		"fallback": "griddy-icons:loyalty-card-alt-filled",
	});
}

export default Component;
