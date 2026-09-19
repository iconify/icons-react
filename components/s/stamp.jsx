import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs1ds98ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cs1ds98ua"/>`,
		"fallback": "griddy-icons:stamp",
	});
}

export default Component;
