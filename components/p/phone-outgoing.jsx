import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwiphiacv.css';
import '../../css/t/ti_gvmbky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bwiphiacv"/><path class="ti_gvmbky"/></g>`,
		"fallback": "reicon:phone-outgoing",
	});
}

export default Component;
