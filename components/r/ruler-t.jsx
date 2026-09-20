import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by0wl7byu.css';
import '../../css/z/zm5kbdcot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="by0wl7byu"/><path class="zm5kbdcot"/></g>`,
		"fallback": "streamline-freehand-color:ruler-t",
	});
}

export default Component;
