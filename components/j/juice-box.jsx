import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuaq-1b8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuaq-1b8v"/>`,
		"fallback": "noviair:juice-box",
	});
}

export default Component;
