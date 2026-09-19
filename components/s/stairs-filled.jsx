import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgij_8b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgij_8b4z"/>`,
		"fallback": "griddy-icons:stairs-filled",
	});
}

export default Component;
