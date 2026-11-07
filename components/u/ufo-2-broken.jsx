import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vk6q_hbyk.css';
import '../../css/n/nwzl3abzk.css';
import '../../css/d/drurmkqhp.css';
import '../../css/y/y-na78bap.css';
import '../../css/n/nk7xm8bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vk6q_hbyk"/><path class="nwzl3abzk"/><path class="drurmkqhp"/><path class="y-na78bap"/><path class="nk7xm8bgk"/></g>`,
		"fallback": "solar:ufo-2-broken",
	});
}

export default Component;
