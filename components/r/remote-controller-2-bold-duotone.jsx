import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c37wdnbmk.css';
import '../../css/r/rgxk9p1eb.css';
import '../../css/z/z_qkiva2m.css';
import '../../css/b/bin6o3y-j.css';
import '../../css/j/jjsm52bln.css';
import '../../css/g/gd_k_uymo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c37wdnbmk"/><path class="rgxk9p1eb"/><path class="z_qkiva2m"/><path class="bin6o3y-j"/><path class="jjsm52bln"/><path clip-rule="evenodd" class="gd_k_uymo"/></g>`,
		"fallback": "solar:remote-controller-2-bold-duotone",
	});
}

export default Component;
