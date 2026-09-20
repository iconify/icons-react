import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqfh8rb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqfh8rb_w"/>`,
		"fallback": "mingcute:newdot-fill",
	});
}

export default Component;
