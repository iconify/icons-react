import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tke-0za-g.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hroj_xbvp.css';
import '../../css/q/qk-cax30a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tke-0za-g"/><g class="mc2zb0bvp"><path class="hroj_xbvp"/><path class="qk-cax30a"/></g></g>`,
		"fallback": "solar:slider-horizontal-bold-duotone",
	});
}

export default Component;
