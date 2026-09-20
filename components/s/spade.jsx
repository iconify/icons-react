import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_7am4v1j.css';
import '../../css/l/lf2w2_ggq.css';
import '../../css/u/u7r_hlblr.css';
import '../../css/m/m_wcssqbj.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/yw3h64ztw.css';
import '../../css/p/poho39rrt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h_7am4v1j"><path class="lf2w2_ggq"/><path class="u7r_hlblr"/><path class="m_wcssqbj"/></g><g class="jn8qy4bru"><path class="yw3h64ztw"/><path class="poho39rrt"/></g>`,
		"fallback": "openmoji:spade",
	});
}

export default Component;
