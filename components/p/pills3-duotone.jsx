import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2h9lt4kg.css';
import '../../css/u/uwhjx3wur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z2h9lt4kg"/><path class="uwhjx3wur"/></g>`,
		"fallback": "reicon:pills3-duotone",
	});
}

export default Component;
