import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdo_nohnu.css';
import '../../css/v/vqeqa-caw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cdo_nohnu"/><path class="vqeqa-caw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:six-thirty",
	});
}

export default Component;
