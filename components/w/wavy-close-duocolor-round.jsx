import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tocao8blo.css';
import '../../css/y/yfhcqibox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tocao8blo"/><path class="yfhcqibox"/></g>`,
		"fallback": "coolicons:wavy-close-duocolor-round",
	});
}

export default Component;
