import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep_t08zig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep_t08zig"/>`,
		"fallback": "iconaut:tag-solid",
	});
}

export default Component;
