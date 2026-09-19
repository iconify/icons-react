import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwr6lqb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwr6lqb4q"/>`,
		"fallback": "bxs:user-badge",
	});
}

export default Component;
