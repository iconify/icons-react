import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/v/vr-1fbcxt.css';
import '../../css/z/zq7jg0pib.css';
import '../../css/y/yw4jidb3p.css';
import '../../css/u/u3q7bkbmt.css';
import '../../css/w/wumvsdbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="vr-1fbcxt"/><path class="zq7jg0pib"/><path class="yw4jidb3p"/><path class="u3q7bkbmt"/><path class="wumvsdbgg"/></g>`,
		"fallback": "withicons-retro:shield-question",
	});
}

export default Component;
