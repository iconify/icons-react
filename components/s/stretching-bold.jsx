import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-cgl0w3i.css';
import '../../css/s/s3nmaw0hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-cgl0w3i"/><path clip-rule="evenodd" class="s3nmaw0hq"/></g>`,
		"fallback": "solar:stretching-bold",
	});
}

export default Component;
