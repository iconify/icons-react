import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p38vymb9k.css';
import '../../css/k/k-h9srbul.css';
import '../../css/l/lub_6wbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p38vymb9k"/><path class="k-h9srbul"/><path class="lub_6wbod"/></g>`,
		"fallback": "reicon:layers2-duotone",
	});
}

export default Component;
