import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c4podkbvc.css';
import '../../css/r/r3yr01bjg.css';
import '../../css/x/xrfn3bcyz.css';
import '../../css/u/u7tu3_vxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c4podkbvc wm-k"/><path class="r3yr01bjg wm-shadow"/><path class="wm-k xrfn3bcyz"/><path class="u7tu3_vxu wm-a"/></g>`,
		"fallback": "withicons:shield-plus-engrave",
	});
}

export default Component;
