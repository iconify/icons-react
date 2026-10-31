import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k584fccac.css';
import '../../css/u/u23wkf-tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k584fccac wm-k"/><path class="u23wkf-tc wm-a"/></g>`,
		"fallback": "withicons:notebook-gloss",
	});
}

export default Component;
