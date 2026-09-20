import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nrnj7e8vo.css';
import '../../css/u/upvp15d9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nrnj7e8vo"/><path class="upvp15d9x"/></g>`,
		"fallback": "solar:shield-minus-broken",
	});
}

export default Component;
