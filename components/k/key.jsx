import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ev171tbdd.css';
import '../../css/p/p6mz1-b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ev171tbdd"/><path class="p6mz1-b-n"/></g>`,
		"fallback": "humbleicons:key",
	});
}

export default Component;
