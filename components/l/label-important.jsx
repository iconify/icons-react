import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey_z6rmmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey_z6rmmh"/>`,
		"fallback": "griddy-icons:label-important",
	});
}

export default Component;
