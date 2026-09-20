import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-3atbv6d.css';
import '../../css/y/y86aejmpm.css';
import '../../css/p/p_3bslbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-3atbv6d"/><path class="y86aejmpm"/><path class="p_3bslbga"/></g>`,
		"fallback": "streamline-freehand-color:reorder-up",
	});
}

export default Component;
