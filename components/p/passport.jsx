import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ai4b0kbev.css';
import '../../css/a/al0e8zqyv.css';
import '../../css/s/sdy0koojq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ai4b0kbev"/><path class="al0e8zqyv"/><path clip-rule="evenodd" class="sdy0koojq"/></g>`,
		"fallback": "reicon:passport",
	});
}

export default Component;
