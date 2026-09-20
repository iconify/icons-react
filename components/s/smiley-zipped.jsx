import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ry2b48bvz.css';
import '../../css/g/g7v0_ib1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ry2b48bvz"/><path class="g7v0_ib1c"/></g>`,
		"fallback": "streamline-freehand-color:smiley-zipped",
	});
}

export default Component;
