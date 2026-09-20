import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv7kvd05e.css';
import '../../css/c/cpmjwca9p.css';
import '../../css/c/c9fy1mkgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv7kvd05e"/><path class="cpmjwca9p"/><path class="c9fy1mkgc"/></g>`,
		"fallback": "proicons:ribbon-star",
	});
}

export default Component;
