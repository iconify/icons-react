import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cz9r6be2l.css';
import '../../css/x/xjjr7_56f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cz9r6be2l"/><path clip-rule="evenodd" class="xjjr7_56f"/></g>`,
		"fallback": "reicon:login3",
	});
}

export default Component;
