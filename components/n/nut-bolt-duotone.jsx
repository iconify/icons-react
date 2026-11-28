import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii5zjkwfw.css';
import '../../css/g/gtozej8pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ii5zjkwfw secondary"/><path class="gtozej8pk primary"/></g>`,
		"fallback": "iconaut:nut-bolt-duotone",
	});
}

export default Component;
