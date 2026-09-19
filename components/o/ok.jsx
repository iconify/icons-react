import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/az4i3kbmz.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="az4i3kbmz"/><path clip-rule="evenodd" class="yzptmubja"/></g>`,
		"fallback": "healthicons:ok",
	});
}

export default Component;
