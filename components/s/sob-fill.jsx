import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pba4racxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pba4racxx"/>`,
		"fallback": "mingcute:sob-fill",
	});
}

export default Component;
