import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrreikh4f.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jrreikh4f"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:nauseous-outline",
	});
}

export default Component;
