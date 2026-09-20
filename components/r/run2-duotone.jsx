import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/orenz6bgo.css';
import '../../css/j/j5syo9blr.css';
import '../../css/j/jog-kkjal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="orenz6bgo"/><path clip-rule="evenodd" class="j5syo9blr"/><path class="jog-kkjal"/></g>`,
		"fallback": "reicon:run2-duotone",
	});
}

export default Component;
