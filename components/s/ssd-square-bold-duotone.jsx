import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4aqmfb0l.css';
import '../../css/v/vsl26gb9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4aqmfb0l"/><path clip-rule="evenodd" class="vsl26gb9u"/></g>`,
		"fallback": "solar:ssd-square-bold-duotone",
	});
}

export default Component;
