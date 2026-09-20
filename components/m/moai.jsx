import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4v0gns3b.css';
import '../../css/r/rz037ub0a.css';
import '../../css/q/q9s4o7bvj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/ovyzkccup.css';
import '../../css/l/lj37avboy.css';
import '../../css/n/n7m7e2qzd.css';
import '../../css/l/lay_4fbzr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4v0gns3b"/><path class="rz037ub0a"/><path class="q9s4o7bvj"/><g class="jn8qy4bru"><path class="ovyzkccup"/><path class="lj37avboy"/><path class="n7m7e2qzd"/><path class="lay_4fbzr"/></g>`,
		"fallback": "openmoji:moai",
	});
}

export default Component;
