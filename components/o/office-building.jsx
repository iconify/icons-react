import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvvzajb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvvzajb0v"/>`,
		"fallback": "heroicons-outline:office-building",
	});
}

export default Component;
