import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nzul_zbqb.css';
import '../../css/q/qu-seslis.css';
import '../../css/a/a9jb4ybyn.css';
import '../../css/i/i_1yambes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nzul_zbqb"/><path class="qu-seslis"/><path class="a9jb4ybyn"/><path class="i_1yambes"/></g>`,
		"fallback": "icon-park:peoples",
	});
}

export default Component;
