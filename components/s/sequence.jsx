import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idy4k6vmw.css';
import '../../css/o/oych3lc0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idy4k6vmw"/><path class="oych3lc0e"/></g>`,
		"fallback": "tdesign:sequence",
	});
}

export default Component;
