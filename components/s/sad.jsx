import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xas2lgbqk.css';
import '../../css/y/yzptmubja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xas2lgbqk"/><path clip-rule="evenodd" class="yzptmubja"/></g>`,
		"fallback": "healthicons:sad",
	});
}

export default Component;
