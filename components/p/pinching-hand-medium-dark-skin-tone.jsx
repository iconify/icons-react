import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a70p5jbrs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pfu1jhazf.css';
import '../../css/l/lor9bq23v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a70p5jbrs"/><g class="jn8qy4bru"><path class="pfu1jhazf"/><path class="lor9bq23v"/></g>`,
		"fallback": "openmoji:pinching-hand-medium-dark-skin-tone",
	});
}

export default Component;
