import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qvee4bc3n.css';
import '../../css/a/a1bjir18w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qvee4bc3n"/><path clip-rule="evenodd" class="a1bjir18w"/></g>`,
		"fallback": "reicon:warehouse",
	});
}

export default Component;
