import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr_lo_bwq.css';
import '../../css/x/xigqp5thb.css';
import '../../css/p/pjuugbv4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kr_lo_bwq"/><path class="xigqp5thb"/><path class="pjuugbv4s"/></g>`,
		"fallback": "streamline-freehand-color:retouch-saturation",
	});
}

export default Component;
