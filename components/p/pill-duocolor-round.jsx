import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fee-8zjmr.css';
import '../../css/v/vbtgc8bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fee-8zjmr"/><path class="vbtgc8bua"/></g>`,
		"fallback": "coolicons:pill-duocolor-round",
	});
}

export default Component;
