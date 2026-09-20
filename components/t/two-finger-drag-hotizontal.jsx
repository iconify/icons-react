import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvmi4l72q.css';
import '../../css/x/x5_v52_qf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvmi4l72q"/><path class="x5_v52_qf"/></g>`,
		"fallback": "streamline-color:two-finger-drag-hotizontal",
	});
}

export default Component;
