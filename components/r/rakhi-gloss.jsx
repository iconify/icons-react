import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qarbw9bib.css';
import '../../css/o/ocj8vbcwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qarbw9bib wm-k"/><path class="ocj8vbcwu wm-s"/></g>`,
		"fallback": "withicons:rakhi-gloss",
	});
}

export default Component;
