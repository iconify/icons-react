import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig-dzq6hv.css';
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
		"content": `<g class="ig-dzq6hv"><path class="iepr63v6i"/><path class="k5geilbhc"/></g><g class="ij2x_72vy"><path class="jpaag9wfp"/><path class="wr2ltj9ef"/></g>`,
		"fallback": "openmoji:nose-light-skin-tone",
	});
}

export default Component;
