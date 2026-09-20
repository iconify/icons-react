import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbt4cvb0h.css';
import '../../css/i/iepr63v6i.css';
import '../../css/k/k5geilbhc.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/j/jpaag9wfp.css';
import '../../css/w/wr2ltj9ef.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bbt4cvb0h"><path class="iepr63v6i"/><path class="k5geilbhc"/></g><g class="ij2x_72vy"><path class="jpaag9wfp"/><path class="wr2ltj9ef"/></g>`,
		"fallback": "openmoji:nose-dark-skin-tone",
	});
}

export default Component;
