import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nqqqpab0e.css';
import '../../css/o/ol3jf_bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nqqqpab0e"/><path class="ol3jf_bij"/></g>`,
		"fallback": "coolicons:store-duocolor-round",
	});
}

export default Component;
