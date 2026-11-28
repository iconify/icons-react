import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkj2alb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vkj2alb9m"/>`,
		"fallback": "iconaut:palm-tree-duotone",
	});
}

export default Component;
