import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/im6h7ccen.css';
import '../../css/w/w7q_frbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="im6h7ccen"/><path clip-rule="evenodd" class="w7q_frbni"/></g>`,
		"fallback": "solar:panel-bottom-open-outline",
	});
}

export default Component;
