import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zpf86pbrs.css';
import '../../css/l/l7efek-4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zpf86pbrs"/><path class="l7efek-4j"/></g>`,
		"fallback": "reicon:star3-duotone",
	});
}

export default Component;
