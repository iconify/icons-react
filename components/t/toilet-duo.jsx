import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qpr9qmbkp.css';
import '../../css/o/oniek1b4l.css';
import '../../css/z/z93dh598w.css';
import '../../css/l/lptx1rgle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qpr9qmbkp"/><path class="oniek1b4l wm-a"/><path class="wm-a z93dh598w"/><path class="lptx1rgle"/></g>`,
		"fallback": "withicons:toilet-duo",
	});
}

export default Component;
