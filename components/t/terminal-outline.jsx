import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elyxbx7ey.css';
import '../../css/r/r92xs4nql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="elyxbx7ey"/><path class="r92xs4nql"/>`,
		"fallback": "ion:terminal-outline",
	});
}

export default Component;
