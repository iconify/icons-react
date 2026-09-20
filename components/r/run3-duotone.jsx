import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngvjkbc_x.css';
import '../../css/m/mnisp1zer.css';
import '../../css/n/ne4u07bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ngvjkbc_x"/><path clip-rule="evenodd" class="mnisp1zer"/><path class="ne4u07bdt"/></g>`,
		"fallback": "reicon:run3-duotone",
	});
}

export default Component;
