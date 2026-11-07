import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yewbpls5v.css';
import '../../css/k/kz1lj24gh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yewbpls5v"/><path class="kz1lj24gh"/></g>`,
		"fallback": "solar:rounded-magnifer-broken",
	});
}

export default Component;
