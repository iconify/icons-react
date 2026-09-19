import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x03-hbueg.css';
import '../../css/n/ndmvfbulu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x03-hbueg"/><path clip-rule="evenodd" class="ndmvfbulu"/></g>`,
		"fallback": "healthicons:ppe-face-shield",
	});
}

export default Component;
