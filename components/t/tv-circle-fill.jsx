import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ne7ihlj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ne7ihlj"/>`,
		"fallback": "f7:tv-circle-fill",
	});
}

export default Component;
