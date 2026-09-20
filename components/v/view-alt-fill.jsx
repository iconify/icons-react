import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp8fatbpd.css';
import '../../css/o/obzjv_b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gp8fatbpd"/><path class="obzjv_b9j"/></g>`,
		"fallback": "lets-icons:view-alt-fill",
	});
}

export default Component;
