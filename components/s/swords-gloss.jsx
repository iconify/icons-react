import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6vluzm9y.css';
import '../../css/t/tjett0bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="q6vluzm9y wm-k"/><path class="tjett0bgk wm-a"/></g>`,
		"fallback": "withicons:swords-gloss",
	});
}

export default Component;
