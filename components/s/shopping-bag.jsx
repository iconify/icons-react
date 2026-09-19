import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0827ujmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0827ujmg"/>`,
		"fallback": "heroicons-outline:shopping-bag",
	});
}

export default Component;
