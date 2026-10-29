import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/osz056cef.css';
import '../../css/c/ca5nkybln.css';
import '../../css/v/vdyejqy2c.css';
import '../../css/n/nmq5enqga.css';
import '../../css/e/ekfd3qbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="osz056cef"/><path class="ca5nkybln wm-a"/><path class="vdyejqy2c"/><path class="nmq5enqga wm-a"/><path class="ekfd3qbxx"/></g>`,
		"fallback": "withicons:sailboat-duo",
	});
}

export default Component;
