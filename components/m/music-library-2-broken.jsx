import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/je9pe87ui.css';
import '../../css/a/avzl98b-s.css';
import '../../css/z/z__g5t12m.css';
import '../../css/x/xjhmwdbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="je9pe87ui"/><path class="avzl98b-s"/><path class="z__g5t12m"/><path class="xjhmwdbtu"/></g>`,
		"fallback": "solar:music-library-2-broken",
	});
}

export default Component;
