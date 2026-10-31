import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c6ln5dhkd.css';
import '../../css/d/d50362z8x.css';
import '../../css/a/avpiuxbvf.css';
import '../../css/h/hg7t_3q-f.css';
import '../../css/x/x5jqk5i0p.css';
import '../../css/i/in1ml66mw.css';
import '../../css/x/xnrnw2yra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c6ln5dhkd wm-shadow"/><path class="d50362z8x"/><path class="avpiuxbvf"/><path class="hg7t_3q-f"/><path class="x5jqk5i0p"/><path class="in1ml66mw wm-deco"/><path class="xnrnw2yra"/></g>`,
		"fallback": "withicons-retro:rose-bouquet",
	});
}

export default Component;
