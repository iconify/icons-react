import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dm5f22bpe.css';
import '../../css/o/oq0p5ab-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dm5f22bpe wm-k"/><path class="oq0p5ab-u wm-a"/></g>`,
		"fallback": "withicons:log-in-gloss",
	});
}

export default Component;
