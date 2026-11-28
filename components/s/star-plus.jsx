import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez9hryb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez9hryb4g"/>`,
		"fallback": "noviair-light:star-plus",
	});
}

export default Component;
