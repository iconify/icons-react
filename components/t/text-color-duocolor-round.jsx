import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tiw-5jboz.css';
import '../../css/x/xscvtn6oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tiw-5jboz"/><path class="xscvtn6oj"/></g>`,
		"fallback": "coolicons:text-color-duocolor-round",
	});
}

export default Component;
