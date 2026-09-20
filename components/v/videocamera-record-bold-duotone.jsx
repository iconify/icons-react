import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fh-gihb7b.css';
import '../../css/w/wpocmtbxz.css';
import '../../css/m/m05gzif4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fh-gihb7b"/><path class="wpocmtbxz"/><path clip-rule="evenodd" class="m05gzif4s"/></g>`,
		"fallback": "solar:videocamera-record-bold-duotone",
	});
}

export default Component;
