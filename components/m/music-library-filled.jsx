import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ln__02_mb.css';
import '../../css/o/o9cp10zqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ln__02_mb"/><path class="o9cp10zqb"/></g>`,
		"fallback": "reicon:music-library-filled",
	});
}

export default Component;
