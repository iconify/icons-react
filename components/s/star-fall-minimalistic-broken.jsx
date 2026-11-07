import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/coem9qbye.css';
import '../../css/h/ht-0wdb4o.css';
import '../../css/q/qoddae6qt.css';
import '../../css/f/fogwhsbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="coem9qbye"/><path class="ht-0wdb4o"/><path class="qoddae6qt"/><path class="fogwhsbru"/></g>`,
		"fallback": "solar:star-fall-minimalistic-broken",
	});
}

export default Component;
