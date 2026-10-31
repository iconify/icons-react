import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g481dpbwk.css';
import '../../css/y/yz548cbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g481dpbwk"/><path class="yz548cbex"/></g>`,
		"fallback": "coolicons:lasso-duocolor-round",
	});
}

export default Component;
