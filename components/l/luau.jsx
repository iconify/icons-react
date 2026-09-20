import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-9ihxbkx.css';
import '../../css/u/ux3w0926c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-9ihxbkx"/><path class="ux3w0926c"/></g>`,
		"fallback": "material-icon-theme:luau",
	});
}

export default Component;
