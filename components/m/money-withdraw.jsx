import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xidyvjbwr.css';
import '../../css/u/ur5tk_hmd.css';
import '../../css/u/uy2b36b8a.css';
import '../../css/r/r-u2atbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xidyvjbwr"/><path class="ur5tk_hmd"/><path class="uy2b36b8a"/><path clip-rule="evenodd" class="r-u2atbak"/></g>`,
		"fallback": "reicon:money-withdraw",
	});
}

export default Component;
