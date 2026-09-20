import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwcw6cb2g.css';
import '../../css/p/pr3ilfitj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwcw6cb2g"/><path class="pr3ilfitj"/></g>`,
		"fallback": "reicon:map-duotone",
	});
}

export default Component;
