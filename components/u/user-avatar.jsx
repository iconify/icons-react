import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pcrc2fbdg.css';
import '../../css/i/iswm-kbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pcrc2fbdg"/><path clip-rule="evenodd" class="iswm-kbei"/></g>`,
		"fallback": "nrk:user-avatar",
	});
}

export default Component;
