import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mcf61j4pk.css';
import '../../css/l/lc0t065gh.css';
import '../../css/x/x10lujbnp.css';
import '../../css/t/t_imz18vr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mcf61j4pk"/><path class="lc0t065gh"/><path class="x10lujbnp"/><path class="t_imz18vr"/></g>`,
		"fallback": "icon-park:surveillance-cameras",
	});
}

export default Component;
