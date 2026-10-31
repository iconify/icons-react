import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ycvtv5baz.css';
import '../../css/a/aaujph9kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ycvtv5baz"/><path class="aaujph9kg"/></g>`,
		"fallback": "coolicons:star-half-duocolor-round",
	});
}

export default Component;
