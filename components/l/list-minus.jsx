import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z-2lqzb9t.css';
import '../../css/p/p06yvsb3o.css';
import '../../css/g/gz5pek7bp.css';
import '../../css/u/ubd7mtuee.css';
import '../../css/k/k6ldmkbnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z-2lqzb9t"/><path class="p06yvsb3o wm-shadow"/><path class="gz5pek7bp"/><path class="ubd7mtuee"/><path class="k6ldmkbnn wm-s"/></g>`,
		"fallback": "withicons-brutal:list-minus",
	});
}

export default Component;
