import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9x609bog.css';
import '../../css/q/qnk1ogbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o9x609bog"/><path class="qnk1ogbqq"/></g>`,
		"fallback": "reicon:wand-duotone",
	});
}

export default Component;
