import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ewv2ge6ug.css';
import '../../css/p/p7y_1d_fe.css';
import '../../css/z/zt0gv6bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ewv2ge6ug"/><path class="p7y_1d_fe"/><path class="zt0gv6bln"/></g>`,
		"fallback": "streamline-freehand-color:safety-fire-extinguisher",
	});
}

export default Component;
