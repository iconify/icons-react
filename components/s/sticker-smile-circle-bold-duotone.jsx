import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lx7m2-bor.css';
import '../../css/i/iqgdhbc6s.css';
import '../../css/l/l3vfyexrd.css';
import '../../css/c/crykbyqhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lx7m2-bor"/><path class="iqgdhbc6s"/><path class="l3vfyexrd"/><path class="crykbyqhi"/></g>`,
		"fallback": "solar:sticker-smile-circle-bold-duotone",
	});
}

export default Component;
