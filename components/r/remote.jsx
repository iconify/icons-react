import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pp3rdbbfq.css';
import '../../css/p/pkwd3te0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pp3rdbbfq"/><path class="pkwd3te0j"/></g>`,
		"fallback": "reicon:remote",
	});
}

export default Component;
