import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p4d9vmb1h.css';
import '../../css/c/ckvwzsyka.css';
import '../../css/i/i3a2c48-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p4d9vmb1h"/><path class="ckvwzsyka"/><path class="i3a2c48-o"/></g>`,
		"fallback": "streamline-freehand-color:time-clock-square",
	});
}

export default Component;
