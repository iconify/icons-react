import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uy525wblg.css';
import '../../css/n/n70p7dbjj.css';
import '../../css/j/jhx07bbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="uy525wblg"/><rect class="n70p7dbjj"/><path class="jhx07bbjp"/></g>`,
		"fallback": "reicon:shapes-filled",
	});
}

export default Component;
