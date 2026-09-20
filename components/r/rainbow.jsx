import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/g/gw4y0-bcv.css';
import '../../css/k/kbgqz7t_k.css';
import '../../css/n/noyokbo2d.css';
import '../../css/l/lgjsfkbso.css';
import '../../css/y/ycyj6tqid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="gw4y0-bcv"/><path class="kbgqz7t_k"/><path class="noyokbo2d"/><path class="lgjsfkbso"/><path class="ycyj6tqid"/></g>`,
		"fallback": "streamline-kameleon-color:rainbow",
	});
}

export default Component;
