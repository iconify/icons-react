import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wntcebbmo.css';
import '../../css/p/pr-pqnbrp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wntcebbmo"/><path class="pr-pqnbrp"/></g>`,
		"fallback": "heroicons-solid:newspaper",
	});
}

export default Component;
