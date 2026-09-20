import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm3b7vc4i.css';
import '../../css/f/f0vm4dbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hm3b7vc4i"/><path clip-rule="evenodd" class="f0vm4dbvi"/></g>`,
		"fallback": "reicon:lock-keyhole2",
	});
}

export default Component;
