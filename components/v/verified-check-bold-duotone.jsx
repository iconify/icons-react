import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qv_28mbpl.css';
import '../../css/v/vq6s3kbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qv_28mbpl"/><path class="vq6s3kbzi"/></g>`,
		"fallback": "solar:verified-check-bold-duotone",
	});
}

export default Component;
