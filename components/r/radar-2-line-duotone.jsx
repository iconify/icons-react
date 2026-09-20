import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fnoa-db2b.css';
import '../../css/t/tt1o2hb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fnoa-db2b"/><path class="tt1o2hb5m"/></g>`,
		"fallback": "solar:radar-2-line-duotone",
	});
}

export default Component;
