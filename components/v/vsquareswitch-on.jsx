import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fn87g02on.css';
import '../../css/j/j1intr00l.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fn87g02on"/><path class="j1intr00l"/></g>`,
		"fallback": "fad:vsquareswitch-on",
	});
}

export default Component;
