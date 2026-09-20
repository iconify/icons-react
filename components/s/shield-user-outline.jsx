import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t0a520pct.css';
import '../../css/b/bt6cr1s9j.css';
import '../../css/r/ryyntubup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t0a520pct"/><path class="bt6cr1s9j"/><path class="ryyntubup"/></g>`,
		"fallback": "solar:shield-user-outline",
	});
}

export default Component;
