import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx8ysgbrh.css';
import '../../css/p/p544mhjmk.css';
import '../../css/w/wnsgfjjrv.css';
import '../../css/z/zzialb8dc.css';
import '../../css/d/dhcbq8rpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx8ysgbrh"/><path class="p544mhjmk"/><path clip-rule="evenodd" class="wnsgfjjrv"/><path class="zzialb8dc"/><path clip-rule="evenodd" class="dhcbq8rpa"/></g>`,
		"fallback": "reicon:server-update-duotone",
	});
}

export default Component;
