import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyl42ccmq.css';
import '../../css/u/udz8ecb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fyl42ccmq"/><path class="udz8ecb7k"/></g>`,
		"fallback": "tabler:pizza",
	});
}

export default Component;
