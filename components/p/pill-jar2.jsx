import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6_pvtbmi.css';
import '../../css/t/tl27lbbfr.css';
import '../../css/v/vgycajblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v6_pvtbmi"/><path class="tl27lbbfr"/><path clip-rule="evenodd" class="vgycajblg"/></g>`,
		"fallback": "reicon:pill-jar2",
	});
}

export default Component;
