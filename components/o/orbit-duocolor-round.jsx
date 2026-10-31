import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o8po9q5jx.css';
import '../../css/k/kmiew8bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o8po9q5jx"/><path class="kmiew8bty"/></g>`,
		"fallback": "coolicons:orbit-duocolor-round",
	});
}

export default Component;
