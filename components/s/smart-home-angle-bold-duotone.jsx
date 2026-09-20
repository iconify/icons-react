import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cznruvbvt.css';
import '../../css/l/la8zw0-un.css';
import '../../css/r/rtss7cadq.css';
import '../../css/y/y37_nkb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cznruvbvt"/><path class="la8zw0-un"/><path class="rtss7cadq"/><path class="y37_nkb_p"/></g>`,
		"fallback": "solar:smart-home-angle-bold-duotone",
	});
}

export default Component;
