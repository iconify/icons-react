import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4jhz_bfw.css';
import '../../css/q/q2tdf4ace.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4jhz_bfw secondary"/><path class="primary q2tdf4ace"/></g>`,
		"fallback": "iconaut:map-pinned-duotone",
	});
}

export default Component;
