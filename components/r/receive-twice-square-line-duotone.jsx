import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/slo5fwl1o.css';
import '../../css/w/ws1lyv0so.css';
import '../../css/s/s9pp0bt6u.css';
import '../../css/l/lxnzn9nmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="slo5fwl1o"/><path class="ws1lyv0so"/><path class="s9pp0bt6u"/><path class="lxnzn9nmw"/></g>`,
		"fallback": "solar:receive-twice-square-line-duotone",
	});
}

export default Component;
