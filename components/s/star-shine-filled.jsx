import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_863hlpn.css';
import '../../css/j/jxjnrbcvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_863hlpn"/><path clip-rule="evenodd" class="jxjnrbcvz"/></g>`,
		"fallback": "reicon:star-shine-filled",
	});
}

export default Component;
