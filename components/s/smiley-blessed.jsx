import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/roa61co5d.css';
import '../../css/z/zq7u13i-v.css';
import '../../css/q/qew07db0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="roa61co5d"/><path class="zq7u13i-v"/><path class="qew07db0v"/></g>`,
		"fallback": "streamline-freehand-color:smiley-blessed",
	});
}

export default Component;
