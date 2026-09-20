import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4cw95b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4cw95b3r"/>`,
		"fallback": "keyline-icons:thumbs-down",
	});
}

export default Component;
