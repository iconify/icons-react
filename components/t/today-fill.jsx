import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo_y6ybav.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo_y6ybav"/>`,
		"fallback": "f7:today-fill",
	});
}

export default Component;
