import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-o_jbbvn.css';
import '../../css/u/u50yvab1y.css';
import '../../css/i/i7fzjucdq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/a/awrvu0bnu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-o_jbbvn"/><circle class="u50yvab1y"/><path class="i7fzjucdq"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="awrvu0bnu"/></g>`,
		"fallback": "openmoji:waning-crescent-moon",
	});
}

export default Component;
