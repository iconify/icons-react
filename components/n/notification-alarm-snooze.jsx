import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh6tf2bky.css';
import '../../css/q/qg967ufrs.css';
import '../../css/g/gwy2ymbxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh6tf2bky"/><path class="qg967ufrs"/><path class="gwy2ymbxd"/></g>`,
		"fallback": "streamline-flex-color:notification-alarm-snooze",
	});
}

export default Component;
