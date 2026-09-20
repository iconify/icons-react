import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml2zg-koh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml2zg-koh"/>`,
		"fallback": "simple-icons:jameson",
	});
}

export default Component;
