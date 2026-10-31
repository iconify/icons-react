import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sx51nsb1t.css';
import '../../css/p/p0m1qu7vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sx51nsb1t"/><path class="p0m1qu7vu"/></g>`,
		"fallback": "coolicons:raccoon-duocolor-round",
	});
}

export default Component;
