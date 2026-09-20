import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_3_adcax.css';
import '../../css/i/ir4hkibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_3_adcax"/><path class="ir4hkibfx"/></g>`,
		"fallback": "pixelarticons:server-sharp",
	});
}

export default Component;
