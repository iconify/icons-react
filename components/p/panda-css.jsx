import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4io5yi0y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4io5yi0y"/>`,
		"fallback": "catppuccin:panda-css",
	});
}

export default Component;
