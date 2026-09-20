import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lo83ek1sg.css';
import '../../css/q/qs-_3c_hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lo83ek1sg"/><path class="qs-_3c_hx"/></g>`,
		"fallback": "streamline-freehand:network-monitor-team-1",
	});
}

export default Component;
