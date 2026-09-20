import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1hvo3b0r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1hvo3b0r"/>`,
		"fallback": "pinhead:pixel-arrows-up-down",
	});
}

export default Component;
