import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/c_-cxlk0e.css';
import '../../css/g/gt8-fu3gr.css';
import '../../css/y/yn_r-dbzv.css';
import '../../css/d/djptb_roy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="c_-cxlk0e"/><path class="gt8-fu3gr"/><path class="yn_r-dbzv"/><path class="djptb_roy"/></g>`,
		"fallback": "streamline-sharp-color:module",
	});
}

export default Component;
