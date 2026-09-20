import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9pwbvb6i.css';
import '../../css/o/odftmqb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9pwbvb6i"/><path class="odftmqb1t"/></g>`,
		"fallback": "reicon:login4-filled",
	});
}

export default Component;
