import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t7lumgcas.css';
import '../../css/n/n_30od4sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t7lumgcas"/><path class="n_30od4sd"/></g>`,
		"fallback": "reicon:security-card-filled",
	});
}

export default Component;
