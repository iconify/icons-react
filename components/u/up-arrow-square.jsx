import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rizeqw8_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rizeqw8_w"/>`,
		"fallback": "bxs:up-arrow-square",
	});
}

export default Component;
