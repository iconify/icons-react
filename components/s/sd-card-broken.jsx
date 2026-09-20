import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/adlaw-b6t.css';
import '../../css/p/pmwvkubtc.css';
import '../../css/g/gkiwa1bxg.css';
import '../../css/r/r02hdib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="adlaw-b6t"/><path class="pmwvkubtc"/><path class="gkiwa1bxg"/><path class="r02hdib4f"/></g>`,
		"fallback": "solar:sd-card-broken",
	});
}

export default Component;
