import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co_rkzb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co_rkzb8k"/>`,
		"fallback": "noviair-light:store-heart",
	});
}

export default Component;
