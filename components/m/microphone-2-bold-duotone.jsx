import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgel_z4sw.css';
import '../../css/u/urt8hvbcu.css';
import '../../css/n/nntez45gw.css';
import '../../css/u/u_fjf8bni.css';
import '../../css/b/brd7vdbxv.css';
import '../../css/h/h8193nbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgel_z4sw"/><path class="urt8hvbcu"/><path class="nntez45gw"/><path class="u_fjf8bni"/><path class="brd7vdbxv"/><path class="h8193nbvl"/></g>`,
		"fallback": "solar:microphone-2-bold-duotone",
	});
}

export default Component;
