import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alk-q2_rf.css';
import '../../css/e/elwgrpb9e.css';
import '../../css/n/n5fz7mb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="alk-q2_rf"/><path class="elwgrpb9e"/><path class="n5fz7mb3b"/></g>`,
		"fallback": "pixelarticons:scroll-vertical",
	});
}

export default Component;
