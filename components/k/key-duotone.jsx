import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_tw2-4km.css';
import '../../css/g/gw_xfbora.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a_tw2-4km"/><path class="gw_xfbora"/></g>`,
		"fallback": "reicon:key-duotone",
	});
}

export default Component;
