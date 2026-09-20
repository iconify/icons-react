import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cit_55o-r.css';
import '../../css/w/wynl0fb6k.css';
import '../../css/c/cfzozv41m.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cit_55o-r"/><path class="wynl0fb6k"/><path class="cfzozv41m"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:send-twice-square-line-duotone",
	});
}

export default Component;
