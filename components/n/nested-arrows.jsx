import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ixz03bm1z.css';
import '../../css/u/udzvdkbzh.css';
import '../../css/x/xo1ui9nyg.css';
import '../../css/l/lickvgqla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ixz03bm1z"/><path class="udzvdkbzh"/><path class="xo1ui9nyg"/><path class="lickvgqla"/></g>`,
		"fallback": "icon-park:nested-arrows",
	});
}

export default Component;
