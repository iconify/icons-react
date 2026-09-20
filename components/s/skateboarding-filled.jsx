import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1hme5bwb.css';
import '../../css/a/aimsb1rle.css';
import '../../css/q/q8mm7wb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1hme5bwb"/><path class="aimsb1rle"/><path class="q8mm7wb4c"/></g>`,
		"fallback": "reicon:skateboarding-filled",
	});
}

export default Component;
