import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jt56a6oms.css';
import '../../css/x/xwor2zlov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jt56a6oms"/><path class="xwor2zlov"/></g>`,
		"fallback": "solar:muted-outline",
	});
}

export default Component;
