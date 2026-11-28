import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s_wur__ux.css';
import '../../css/b/b-1q_ac6k.css';
import '../../css/p/pvf92ss0l.css';
import '../../css/h/hq92kbb7i.css';
import '../../css/x/xjercxf4z.css';
import '../../css/z/zjnxddb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s_wur__ux"/><path class="b-1q_ac6k"/><path class="pvf92ss0l"/><path class="hq92kbb7i"/><path class="xjercxf4z"/><path class="zjnxddb5c"/></g>`,
		"fallback": "iconaut:text-select",
	});
}

export default Component;
