import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kok0_rbdc.css';
import '../../css/p/pwxr7hcud.css';
import '../../css/a/aj-1nccta.css';
import '../../css/c/cj59lz24r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kok0_rbdc"/><path class="pwxr7hcud"/><path class="aj-1nccta"/><path clip-rule="evenodd" class="cj59lz24r"/></g>`,
		"fallback": "solar:password-outline",
	});
}

export default Component;
