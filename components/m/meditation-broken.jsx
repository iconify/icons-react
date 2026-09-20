import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v6pzvpfzc.css';
import '../../css/b/bb09eobfs.css';
import '../../css/z/z8-m9_8kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v6pzvpfzc"/><path class="bb09eobfs"/><path class="z8-m9_8kc"/></g>`,
		"fallback": "solar:meditation-broken",
	});
}

export default Component;
