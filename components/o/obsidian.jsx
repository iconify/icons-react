import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt3uovblz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt3uovblz"/>`,
		"fallback": "fa7-brands:obsidian",
	});
}

export default Component;
