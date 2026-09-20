import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/watrobcwe.css';
import '../../css/c/c73611bax.css';
import '../../css/i/iff8-juqi.css';
import '../../css/h/hj1c6pywy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/g2aoiwb3v.css';
import '../../css/i/ikluv5b6n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="watrobcwe"/><path class="c73611bax"/><path class="iff8-juqi"/><path class="hj1c6pywy"/><g class="jn8qy4bru"><ellipse class="g2aoiwb3v"/><path class="ikluv5b6n"/></g>`,
		"fallback": "openmoji:mirror",
	});
}

export default Component;
