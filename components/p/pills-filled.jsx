import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x9vh1bb8v.css';
import '../../css/w/wpc8lr7dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x9vh1bb8v"/><path class="wpc8lr7dz"/></g>`,
		"fallback": "reicon:pills-filled",
	});
}

export default Component;
