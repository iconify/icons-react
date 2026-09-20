import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk2xieb9p.css';
import '../../css/l/lti03hx_h.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/ufer1mbwg.css';
import '../../css/h/hjsevj3ep.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk2xieb9p"/><path class="lti03hx_h"/><g class="jn8qy4bru"><path class="ufer1mbwg"/><path class="hjsevj3ep"/></g>`,
		"fallback": "openmoji:takeout-box",
	});
}

export default Component;
