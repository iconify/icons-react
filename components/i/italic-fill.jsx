import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5-x_5z0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5-x_5z0f"/>`,
		"fallback": "keyline-icons:italic-fill",
	});
}

export default Component;
