import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mctc1msll.css';
import '../../css/i/iv082wqfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mctc1msll wm-k"/><path class="iv082wqfl wm-a"/></g>`,
		"fallback": "withicons:sort-alpha-gloss",
	});
}

export default Component;
