import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fst13_7nd.css';
import '../../css/y/yebf7bbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fst13_7nd"/><path class="yebf7bbwe"/></g>`,
		"fallback": "coolicons:loop-duocolor-round",
	});
}

export default Component;
