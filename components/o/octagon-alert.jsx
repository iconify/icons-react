import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uxfqx7b8a.css';
import '../../css/w/wkbb-c3nd.css';
import '../../css/l/ln33cc_mx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uxfqx7b8a"/><path class="wkbb-c3nd"/><path class="ln33cc_mx"/></g>`,
		"fallback": "iconaut:octagon-alert",
	});
}

export default Component;
