import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpn9djbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dpn9djbnn"/>`,
		"fallback": "griddy-icons:user-off",
	});
}

export default Component;
