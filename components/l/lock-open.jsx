import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oq3k_h54k.css';
import '../../css/f/f7yhsbbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oq3k_h54k"/><path class="f7yhsbbjp"/></g>`,
		"fallback": "tabler:lock-open",
	});
}

export default Component;
