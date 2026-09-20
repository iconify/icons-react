import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yj_e_3bzh.css';
import '../../css/c/cys13zb4y.css';
import '../../css/k/kxl37ibsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yj_e_3bzh"/><path class="cys13zb4y"/><path class="kxl37ibsb"/></g>`,
		"fallback": "reicon:phone-rotate3-duotone",
	});
}

export default Component;
