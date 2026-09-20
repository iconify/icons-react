import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy7lgut9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy7lgut9h"/>`,
		"fallback": "simple-icons:jovian",
	});
}

export default Component;
