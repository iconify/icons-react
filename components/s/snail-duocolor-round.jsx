import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/leki8j95v.css';
import '../../css/y/y2evo6q0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="leki8j95v"/><path class="y2evo6q0r"/></g>`,
		"fallback": "coolicons:snail-duocolor-round",
	});
}

export default Component;
