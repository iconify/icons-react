import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g42mrps4n.css';
import '../../css/y/yb901tbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g42mrps4n"/><path class="yb901tbth"/></g>`,
		"fallback": "si:takeoff-duotone",
	});
}

export default Component;
