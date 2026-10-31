import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxtldcphh.css';
import '../../css/a/ap48k2b4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jxtldcphh"/><path class="ap48k2b4t"/></g>`,
		"fallback": "coolicons:row-plus-duocolor-round",
	});
}

export default Component;
