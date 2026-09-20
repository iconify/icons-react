import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa3c4bb_z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa3c4bb_z"/>`,
		"fallback": "ooui:newline-rtl",
	});
}

export default Component;
