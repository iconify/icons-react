import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgp8mobyj.css';
import '../../css/m/mwelhcb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgp8mobyj"/><path class="mwelhcb_u"/></g>`,
		"fallback": "reicon:user-square3-filled",
	});
}

export default Component;
