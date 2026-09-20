import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5bbu8buq.css';
import '../../css/o/o41vq3ozh.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5bbu8buq"/><path clip-rule="evenodd" class="o41vq3ozh"/><path class="c_zdt_bqs"/></g>`,
		"fallback": "solar:user-heart-bold",
	});
}

export default Component;
