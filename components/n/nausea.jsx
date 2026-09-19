import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k-m8u9jel.css';
import '../../css/x/x2gb78bod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k-m8u9jel"/><path class="x2gb78bod"/></g>`,
		"fallback": "healthicons:nausea",
	});
}

export default Component;
