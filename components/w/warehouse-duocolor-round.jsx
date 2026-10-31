import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygr-3532s.css';
import '../../css/c/cr9p0dbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ygr-3532s"/><path class="cr9p0dbai"/></g>`,
		"fallback": "coolicons:warehouse-duocolor-round",
	});
}

export default Component;
