import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vq-tzqbgo.css';
import '../../css/v/v31sre6ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vq-tzqbgo wm-k"/><path class="v31sre6ts wm-a"/></g>`,
		"fallback": "withicons:superscript-gloss",
	});
}

export default Component;
