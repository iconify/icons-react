import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7wq5ibyr.css';
import '../../css/n/nwzl3abzk.css';
import '../../css/j/jo3znfb0x.css';
import '../../css/y/y-na78bap.css';
import '../../css/e/ekt69dbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o7wq5ibyr"/><path class="nwzl3abzk"/><path class="jo3znfb0x"/><path class="y-na78bap"/><path class="ekt69dbzu"/></g>`,
		"fallback": "solar:ufo-2-broken",
	});
}

export default Component;
