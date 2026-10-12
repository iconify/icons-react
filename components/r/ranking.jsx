import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irbf1mb7i.css';
import '../../css/p/po__jl61e.css';
import '../../css/a/asgppib1w.css';
import '../../css/r/rk9_t_g4q.css';
import '../../css/j/jbg282--l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="irbf1mb7i"/><path class="po__jl61e"/><path class="asgppib1w"/><path class="rk9_t_g4q"/><path class="jbg282--l"/></g>`,
		"fallback": "andrsrxn:ranking",
	});
}

export default Component;
