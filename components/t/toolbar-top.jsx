import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roiie7baq.css';
import '../../css/t/twe5_64qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roiie7baq"/><path clip-rule="evenodd" class="twe5_64qf"/></g>`,
		"fallback": "gg:toolbar-top",
	});
}

export default Component;
