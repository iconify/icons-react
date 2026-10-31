import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i166q8fgq.css';
import '../../css/j/j9_sc9s1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i166q8fgq"/><path class="j9_sc9s1l"/></g>`,
		"fallback": "coolicons:pizza-duocolor-round",
	});
}

export default Component;
