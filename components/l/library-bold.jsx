import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ccaahidjq.css';
import '../../css/l/l83quhbtc.css';
import '../../css/q/q_3z9yhmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ccaahidjq"/><path class="l83quhbtc"/><path clip-rule="evenodd" class="q_3z9yhmi"/></g>`,
		"fallback": "solar:library-bold",
	});
}

export default Component;
