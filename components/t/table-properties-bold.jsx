import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sex9wi6pa.css';
import '../../css/e/env-5pv1b.css';
import '../../css/w/wi9oep35x.css';
import '../../css/p/pn0v6mlvm.css';
import '../../css/f/fhiuaertw.css';
import '../../css/l/l6czwtbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sex9wi6pa"/><path class="env-5pv1b"/><path class="wi9oep35x"/><path class="pn0v6mlvm"/><path class="fhiuaertw"/><path class="l6czwtbiw"/></g>`,
		"fallback": "solar:table-properties-bold",
	});
}

export default Component;
