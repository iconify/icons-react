import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0_w1obnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0_w1obnb"/>`,
		"fallback": "coolicons:unfold-less-bulk-round",
	});
}

export default Component;
