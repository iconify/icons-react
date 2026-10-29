import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h5rhl3b_r.css';
import '../../css/x/xurpiib7h.css';
import '../../css/m/m-y2gobfk.css';
import '../../css/r/rqr48qurw.css';
import '../../css/n/nj1lohb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h5rhl3b_r wm-deco"/><path class="wm-deco xurpiib7h"/><path class="m-y2gobfk wm-k"/><path class="rqr48qurw wm-k"/><path class="nj1lohb5m wm-a"/></g>`,
		"fallback": "withicons:text-cursor-input-blueprint",
	});
}

export default Component;
