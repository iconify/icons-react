import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz5z8o_px.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz5z8o_px"/>`,
		"fallback": "catppuccin:perl",
	});
}

export default Component;
