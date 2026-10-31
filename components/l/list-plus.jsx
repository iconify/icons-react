import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gu46j3bti.css';
import '../../css/f/fqx4c0b0g.css';
import '../../css/n/n_c6pzbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gu46j3bti"/><path class="fqx4c0b0g"/><path class="n_c6pzbfl wm-s"/></g>`,
		"fallback": "withicons-retro:list-plus",
	});
}

export default Component;
