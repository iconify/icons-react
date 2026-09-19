import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpqk98bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpqk98bdh"/>`,
		"fallback": "griddy-icons:raindrops-alt-filled",
	});
}

export default Component;
