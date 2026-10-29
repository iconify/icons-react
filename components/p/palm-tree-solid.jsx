import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bti7alb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bti7alb5v"/>`,
		"fallback": "withicons:palm-tree-solid",
	});
}

export default Component;
