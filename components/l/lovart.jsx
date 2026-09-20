import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0nf3sbxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0nf3sbxj"/>`,
		"fallback": "thesvg:lovart",
	});
}

export default Component;
