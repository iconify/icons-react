import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylog8lipq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylog8lipq"/>`,
		"fallback": "mingcute:unlink-2-fill",
	});
}

export default Component;
