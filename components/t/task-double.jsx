import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpwbhrmwg.css';
import '../../css/o/ozhoyrbed.css';
import '../../css/l/lryotrmjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpwbhrmwg"/><path class="ozhoyrbed"/><path class="lryotrmjk"/></g>`,
		"fallback": "tdesign:task-double",
	});
}

export default Component;
