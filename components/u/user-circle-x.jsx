import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wud1fdc0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wud1fdc0h"/>`,
		"fallback": "noviair-light:user-circle-x",
	});
}

export default Component;
