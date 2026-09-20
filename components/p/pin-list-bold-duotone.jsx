import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg6p_jbqy.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xwm12xb4n.css';
import '../../css/d/ddac4o51k.css';
import '../../css/y/yz1lcmbqq.css';
import '../../css/g/gmpr8wbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg6p_jbqy"/><g class="mc2zb0bvp"><path class="xwm12xb4n"/><path class="ddac4o51k"/><path class="yz1lcmbqq"/><path class="gmpr8wbig"/></g></g>`,
		"fallback": "solar:pin-list-bold-duotone",
	});
}

export default Component;
