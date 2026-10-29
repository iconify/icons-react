import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvp5xg20i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvp5xg20i"/>`,
		"fallback": "withicons:plane",
	});
}

export default Component;
