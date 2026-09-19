import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifduj-p8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifduj-p8c"/>`,
		"fallback": "griddy-icons:minus-circle-filled",
	});
}

export default Component;
