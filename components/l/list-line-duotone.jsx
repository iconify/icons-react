import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q_xpl5b9t.css';
import '../../css/t/tbylcsjks.css';
import '../../css/b/byfgwnb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q_xpl5b9t"/><path class="tbylcsjks"/><path class="byfgwnb1r"/></g>`,
		"fallback": "solar:list-line-duotone",
	});
}

export default Component;
