import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0831w-9e.css';
import '../../css/b/bm3dyy1hb.css';
import '../../css/f/f1qu4wb2w.css';
import '../../css/t/tpznr8t4q.css';
import '../../css/t/tvj_0cc0e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q0831w-9e"/><path class="bm3dyy1hb"/><path class="f1qu4wb2w"/><path class="tpznr8t4q"/><path class="tvj_0cc0e"/></g>`,
		"fallback": "streamline-color:online-medical-web-service",
	});
}

export default Component;
