import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj5c17bvc.css';
import '../../css/h/h1sv9qv9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jj5c17bvc"/><path class="h1sv9qv9l"/></g>`,
		"fallback": "reicon:plane3-duotone",
	});
}

export default Component;
