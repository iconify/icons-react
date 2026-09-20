import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-xzcc5xq.css';
import '../../css/n/n0vt6rb9h.css';
import '../../css/r/r8sdn9_ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l-xzcc5xq"/><path class="n0vt6rb9h"/><path clip-rule="evenodd" class="r8sdn9_ku"/></g>`,
		"fallback": "reicon:watch2-duotone",
	});
}

export default Component;
