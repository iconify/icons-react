import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef3saca2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef3saca2u"/>`,
		"fallback": "griddy-icons:navigation-filled",
	});
}

export default Component;
