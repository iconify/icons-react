import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pfjefkbxt.css';
import '../../css/n/nw92swb-t.css';
import '../../css/u/upow0ezwy.css';
import '../../css/h/hsdae9b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pfjefkbxt"/><path class="nw92swb-t"/><path class="upow0ezwy"/><path class="hsdae9b6e"/></g>`,
		"fallback": "solar:medal-ribbons-star-broken",
	});
}

export default Component;
