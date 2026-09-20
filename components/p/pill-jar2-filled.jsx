import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix1g3dbsk.css';
import '../../css/n/nauxe-bnh.css';
import '../../css/r/rer6grbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ix1g3dbsk"/><path clip-rule="evenodd" class="nauxe-bnh"/><path class="rer6grbox"/></g>`,
		"fallback": "reicon:pill-jar2-filled",
	});
}

export default Component;
