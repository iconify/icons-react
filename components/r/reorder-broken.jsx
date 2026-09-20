import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c-bheu_of.css';
import '../../css/y/ypha6jbll.css';
import '../../css/h/hhlxfkbol.css';
import '../../css/h/hxd6ts2yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c-bheu_of"/><path class="ypha6jbll"/><path class="hhlxfkbol"/><path class="hxd6ts2yz"/></g>`,
		"fallback": "solar:reorder-broken",
	});
}

export default Component;
