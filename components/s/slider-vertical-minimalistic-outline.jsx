import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9r4-h63l.css';
import '../../css/z/zoh7-268d.css';
import '../../css/d/dkcoat2_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s9r4-h63l"/><path class="zoh7-268d"/><path class="dkcoat2_r"/></g>`,
		"fallback": "solar:slider-vertical-minimalistic-outline",
	});
}

export default Component;
