import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbj4o1-vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbj4o1-vd"/>`,
		"fallback": "mingcute:link-3-fill",
	});
}

export default Component;
