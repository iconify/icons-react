import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jcqr8svbw.css';
import '../../css/d/dm___25cf.css';
import '../../css/a/aaetewbbt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jcqr8svbw"/><path class="dm___25cf"/><path class="aaetewbbt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-construction-worker",
	});
}

export default Component;
