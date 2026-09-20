import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sz975jbqe.css';
import '../../css/v/v861yyx4s.css';
import '../../css/m/mhbrbobvd.css';
import '../../css/n/nb69bhbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sz975jbqe"/><path class="v861yyx4s"/><path class="mhbrbobvd"/><path class="nb69bhbdn"/></g>`,
		"fallback": "solar:server-minimalistic-outline",
	});
}

export default Component;
