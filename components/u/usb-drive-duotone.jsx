import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g1tghbccd.css';
import '../../css/o/ox-5v-b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g1tghbccd"/><path clip-rule="evenodd" class="ox-5v-b6k"/></g>`,
		"fallback": "keyline-icons:usb-drive-duotone",
	});
}

export default Component;
