import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a41ny8bfc.css';
import '../../css/r/rs1_bdbxx.css';
import '../../css/l/lcjx0qb2l.css';
import '../../css/x/xkuwsw8ka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a41ny8bfc"/><path class="rs1_bdbxx"/><path class="lcjx0qb2l"/><path class="xkuwsw8ka"/></g>`,
		"fallback": "icon-park:symbol-double-x",
	});
}

export default Component;
