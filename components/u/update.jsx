import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d_djo3b2e.css';
import '../../css/k/k5lxk7bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d_djo3b2e"/><path class="k5lxk7bym"/></g>`,
		"fallback": "wordpress:update",
	});
}

export default Component;
