import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ooyw8-y8g.css';
import '../../css/b/birm78b0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ooyw8-y8g"/><path class="birm78b0k"/></g>`,
		"fallback": "coolicons:shopping-bag-duocolor-round",
	});
}

export default Component;
