import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb_7z4bbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb_7z4bbu"/>`,
		"fallback": "mingcute:music-2-line",
	});
}

export default Component;
