import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlchzfbvg.css';
import '../../css/t/tcd3ggkdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlchzfbvg"/><path clip-rule="evenodd" class="tcd3ggkdf"/></g>`,
		"fallback": "reicon:microchip-filled",
	});
}

export default Component;
