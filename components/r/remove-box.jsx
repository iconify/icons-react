import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycgn9rbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycgn9rbtj"/>`,
		"fallback": "pixelarticons:remove-box",
	});
}

export default Component;
