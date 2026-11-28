import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx967rl8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx967rl8i"/>`,
		"fallback": "iconaut:stroke-line-join-round-solid",
	});
}

export default Component;
