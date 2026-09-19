import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k83ygvv2n.css';
import '../../css/s/smchphbbk.css';
import '../../css/l/lh26qe_gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k83ygvv2n"/><path clip-rule="evenodd" class="smchphbbk"/><path clip-rule="evenodd" class="lh26qe_gi"/></g>`,
		"fallback": "healthicons:mobile-outline-24px",
	});
}

export default Component;
