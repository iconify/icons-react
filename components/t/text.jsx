import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njwbx3b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njwbx3b0z"/>`,
		"fallback": "proicons:text",
	});
}

export default Component;
