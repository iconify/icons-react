import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri8ga0brr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ri8ga0brr"/>`,
		"fallback": "mingcute:netease-music-fill",
	});
}

export default Component;
