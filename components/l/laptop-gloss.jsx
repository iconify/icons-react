import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jlq_tq_ok.css';
import '../../css/p/pc8jkbbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jlq_tq_ok wm-k"/><path class="pc8jkbbog wm-a"/></g>`,
		"fallback": "withicons:laptop-gloss",
	});
}

export default Component;
