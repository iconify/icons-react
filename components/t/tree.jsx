import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h7xmtybht.css';
import '../../css/g/g9bdn3bvz.css';
import '../../css/s/sl_4gg8sm.css';
import '../../css/z/z4269320o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="h7xmtybht"/><path class="g9bdn3bvz"/><path class="sl_4gg8sm"/><path class="z4269320o"/></g>`,
		"fallback": "icon-park:tree",
	});
}

export default Component;
