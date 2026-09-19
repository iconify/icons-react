import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7_wzybpw.css';
import '../../css/w/wl8v1bcuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v7_wzybpw"/><path clip-rule="evenodd" class="wl8v1bcuu"/></g>`,
		"fallback": "healthicons:magic-wand-24px",
	});
}

export default Component;
