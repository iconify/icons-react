import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h524gymsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h524gymsi"/>`,
		"fallback": "ri:loader-4-fill",
	});
}

export default Component;
