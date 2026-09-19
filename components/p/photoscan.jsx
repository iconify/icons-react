import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uogs7shuy.css';
import '../../css/f/fzvm5vbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uogs7shuy"/><path clip-rule="evenodd" class="fzvm5vbbb"/></g>`,
		"fallback": "gg:photoscan",
	});
}

export default Component;
