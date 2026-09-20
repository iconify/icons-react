import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r5fahkzon.css';
import '../../css/g/g7hqkcb6k.css';
import '../../css/t/tokx6ighc.css';
import '../../css/u/upvp15d9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r5fahkzon"/><path class="g7hqkcb6k"/><path class="tokx6ighc"/><path class="upvp15d9x"/></g>`,
		"fallback": "solar:shield-network-broken",
	});
}

export default Component;
