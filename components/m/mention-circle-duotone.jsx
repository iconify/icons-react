import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5iom388o.css';
import '../../css/q/q-b8h3cjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p5iom388o"/><path clip-rule="evenodd" class="q-b8h3cjm"/></g>`,
		"fallback": "reicon:mention-circle-duotone",
	});
}

export default Component;
