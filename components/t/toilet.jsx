import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/msymncc2p.css';
import '../../css/m/mh_7zbc2g.css';
import '../../css/v/v439fl81f.css';
import '../../css/v/vt17sibuz.css';
import '../../css/i/iuwtlacnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="msymncc2p"/><path class="mh_7zbc2g"/><path class="v439fl81f"/><path clip-rule="evenodd" class="vt17sibuz"/><path class="iuwtlacnm"/></g>`,
		"fallback": "griddy-icons:toilet",
	});
}

export default Component;
