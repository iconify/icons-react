import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q-xtgobda.css';
import '../../css/w/wuk4o269j.css';
import '../../css/r/r4ytz2xbu.css';
import '../../css/b/bppk80h1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q-xtgobda"/><path class="wuk4o269j"/><path class="r4ytz2xbu"/><path class="bppk80h1t"/></g>`,
		"fallback": "solar:shop-line-duotone",
	});
}

export default Component;
