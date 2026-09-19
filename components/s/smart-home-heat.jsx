import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i3zp-98dz.css';
import '../../css/s/sjyf2zbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i3zp-98dz"/><path clip-rule="evenodd" class="sjyf2zbpk"/></g>`,
		"fallback": "gg:smart-home-heat",
	});
}

export default Component;
