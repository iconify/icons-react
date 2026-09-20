import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbj61k8ri.css';
import '../../css/d/dhf80vb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zbj61k8ri"/><path clip-rule="evenodd" class="dhf80vb5s"/></g>`,
		"fallback": "reicon:shield-lock2-filled",
	});
}

export default Component;
