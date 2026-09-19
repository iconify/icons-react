import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czz9dlbkl.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czz9dlbkl"/>`,
		"fallback": "fontisto:twitch",
	});
}

export default Component;
