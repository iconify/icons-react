import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh22lt3gh.css';
import '../../css/k/ks82cb6hj.css';
import '../../css/q/qk-rao-nr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/c/cz18k680z.css';
import '../../css/x/x5eid6x3i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh22lt3gh"/><path class="ks82cb6hj"/><path class="qk-rao-nr"/><g class="jn8qy4bru"><path class="cz18k680z"/><path class="x5eid6x3i"/></g>`,
		"fallback": "openmoji:warning-tsunami",
	});
}

export default Component;
