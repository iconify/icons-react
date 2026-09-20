import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b78hd_rlk.css';
import '../../css/r/rn9fw-2lr.css';
import '../../css/y/yc2_9cb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b78hd_rlk"/><path class="rn9fw-2lr"/><path class="yc2_9cb1j"/></g>`,
		"fallback": "streamline-freehand-color:phone-off",
	});
}

export default Component;
