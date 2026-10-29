import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jyuql7bnr.css';
import '../../css/f/fk6-9ho_o.css';
import '../../css/h/h-lozg5_w.css';
import '../../css/i/i38wlgirz.css';
import '../../css/d/dj8l97dto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jyuql7bnr wm-deco"/><path class="fk6-9ho_o wm-deco"/><path class="h-lozg5_w wm-deco"/><path class="i38wlgirz wm-k"/><path class="dj8l97dto wm-a"/></g>`,
		"fallback": "withicons:red-lantern-blueprint",
	});
}

export default Component;
