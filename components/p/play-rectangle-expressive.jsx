import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg2u8wczn.css';
import '../../css/l/lnoo-mkzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gg2u8wczn"/><path clip-rule="evenodd" class="lnoo-mkzf"/></g>`,
		"fallback": "nrk:play-rectangle-expressive",
	});
}

export default Component;
