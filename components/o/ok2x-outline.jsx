import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hobtoeb-y.css';
import '../../css/i/i5jeaub5q.css';
import '../../css/s/siob3cbvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hobtoeb-y"/><path clip-rule="evenodd" class="i5jeaub5q"/><path clip-rule="evenodd" class="siob3cbvz"/></g>`,
		"fallback": "healthicons:ok2x-outline",
	});
}

export default Component;
