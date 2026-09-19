import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le8ab_e8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le8ab_e8k"/>`,
		"fallback": "heroicons-outline:menu-alt-2",
	});
}

export default Component;
