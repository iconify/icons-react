import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/io1oh6b4b.css';
import '../../css/x/x8p3ew2md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="io1oh6b4b"/><path class="x8p3ew2md"/></g>`,
		"fallback": "solar:streets-map-point-outline",
	});
}

export default Component;
