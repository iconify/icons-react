import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dym2v2bzv.css';
import '../../css/g/ggzz5o_gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dym2v2bzv secondary"/><path class="ggzz5o_gs primary"/></g>`,
		"fallback": "iconaut:undo-duotone",
	});
}

export default Component;
