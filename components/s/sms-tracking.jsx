import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/qk6g9fb7q.css';
import '../../css/t/tipezcn3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="qk6g9fb7q"/><path class="tipezcn3g"/></g>`,
		"fallback": "reicon:sms-tracking",
	});
}

export default Component;
