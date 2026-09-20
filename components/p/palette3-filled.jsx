import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wefp_rbaj.css';
import '../../css/f/flv2-_rcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wefp_rbaj"/><path clip-rule="evenodd" class="flv2-_rcy"/></g>`,
		"fallback": "reicon:palette3-filled",
	});
}

export default Component;
