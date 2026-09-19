import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmv0z7b4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmv0z7b4v"/>`,
		"fallback": "game-icons:stairs",
	});
}

export default Component;
