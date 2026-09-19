import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuw7_9_1x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuw7_9_1x"/>`,
		"fallback": "catppuccin:pug",
	});
}

export default Component;
