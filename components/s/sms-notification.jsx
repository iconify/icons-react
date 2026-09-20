import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/u/uq-zzhbvc.css';
import '../../css/q/qtvtrub9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="uq-zzhbvc"/><path class="qtvtrub9q"/></g>`,
		"fallback": "reicon:sms-notification",
	});
}

export default Component;
