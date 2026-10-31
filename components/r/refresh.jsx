import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z4h-ykbza.css';
import '../../css/x/xwsqaqb_k.css';
import '../../css/a/a-a57fp8u.css';
import '../../css/o/oasiy2rns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z4h-ykbza"/><path class="wm-shadow xwsqaqb_k"/><path class="a-a57fp8u"/><path class="oasiy2rns"/></g>`,
		"fallback": "withicons-brutal:refresh",
	});
}

export default Component;
