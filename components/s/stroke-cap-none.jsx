import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8eoxq4kf.css';
import '../../css/e/e6hdrjb1u.css';
import '../../css/d/d_i9cqbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8eoxq4kf"/><path class="e6hdrjb1u"/><path class="d_i9cqbhg"/></g>`,
		"fallback": "andrsrxn:stroke-cap-none",
	});
}

export default Component;
