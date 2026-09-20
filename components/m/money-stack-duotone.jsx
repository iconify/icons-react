import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kien07crx.css';
import '../../css/n/n1zlzeb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kien07crx"/><path class="n1zlzeb0e"/></g>`,
		"fallback": "reicon:money-stack-duotone",
	});
}

export default Component;
