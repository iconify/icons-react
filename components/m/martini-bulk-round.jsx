import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnxq4l1uo.css';
import '../../css/i/iv0w9bbpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnxq4l1uo"/><path class="iv0w9bbpt"/></g>`,
		"fallback": "coolicons:martini-bulk-round",
	});
}

export default Component;
