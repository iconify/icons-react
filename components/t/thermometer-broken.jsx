import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bt4shyssc.css';
import '../../css/u/u__owgkcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bt4shyssc"/><path class="u__owgkcd"/></g>`,
		"fallback": "solar:thermometer-broken",
	});
}

export default Component;
