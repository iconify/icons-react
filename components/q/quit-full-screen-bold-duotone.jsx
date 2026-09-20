import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hna7n1bsd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gjdm3pbxq.css';
import '../../css/w/wryprvbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hna7n1bsd"/><g class="mc2zb0bvp"><path class="gjdm3pbxq"/><path class="wryprvbkm"/></g></g>`,
		"fallback": "solar:quit-full-screen-bold-duotone",
	});
}

export default Component;
