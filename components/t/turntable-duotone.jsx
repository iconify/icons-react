import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbl2780ei.css';
import '../../css/b/b92jcf1lx.css';
import '../../css/m/mc1f7e0hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbl2780ei"/><path clip-rule="evenodd" class="b92jcf1lx"/><path clip-rule="evenodd" class="mc1f7e0hh"/></g>`,
		"fallback": "reicon:turntable-duotone",
	});
}

export default Component;
