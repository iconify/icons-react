import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy2_i8b5f.css';
import '../../css/j/j6kddzykf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cy2_i8b5f"/><path class="j6kddzykf"/></g>`,
		"fallback": "coolicons:usb-bulk-round",
	});
}

export default Component;
