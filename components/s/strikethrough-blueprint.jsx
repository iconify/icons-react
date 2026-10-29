import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s45x-eokh.css';
import '../../css/t/t218te2ox.css';
import '../../css/z/zj1_u_b4s.css';
import '../../css/e/eduug97bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s45x-eokh wm-deco"/><path class="t218te2ox wm-deco"/><path class="wm-k zj1_u_b4s"/><path class="eduug97bk wm-a"/></g>`,
		"fallback": "withicons:strikethrough-blueprint",
	});
}

export default Component;
