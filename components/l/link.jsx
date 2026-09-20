import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqqwh7w1i.css';
import '../../css/b/b8nn58b7g.css';
import '../../css/k/kskmi_bqr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f5egfw3ss.css';
import '../../css/t/t7amedcuj.css';
import '../../css/c/ccs-lpwmj.css';
import '../../css/d/d3i4w718l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sqqwh7w1i"><path class="b8nn58b7g"/><path class="kskmi_bqr"/></g><g class="jn8qy4bru"><path class="f5egfw3ss"/><path class="t7amedcuj"/><path class="ccs-lpwmj"/><path class="d3i4w718l"/></g>`,
		"fallback": "openmoji:link",
	});
}

export default Component;
