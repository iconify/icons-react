import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aly3a1bmz.css';
import '../../css/k/k8x35gqat.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aly3a1bmz"/><path class="k8x35gqat"/></g>`,
		"fallback": "jam:viadeo",
	});
}

export default Component;
