import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rwrmkrb4x.css';
import '../../css/w/wkj-gfbiy.css';
import '../../css/f/f93u32esc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rwrmkrb4x"/><path class="wkj-gfbiy"/><path class="f93u32esc"/></g>`,
		"fallback": "solar:sofa-3-broken",
	});
}

export default Component;
