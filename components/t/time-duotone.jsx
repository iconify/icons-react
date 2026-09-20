import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gsbwbdb1y.css';
import '../../css/z/ztt21herj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="gsbwbdb1y"/><path class="ztt21herj"/></g>`,
		"fallback": "lets-icons:time-duotone",
	});
}

export default Component;
