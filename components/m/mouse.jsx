import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bode0t1-k.css';
import '../../css/a/az5r9nb_t.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/xqp3lqbhw.css';
import '../../css/m/mewnltmzk.css';
import '../../css/s/si33jlbhj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bode0t1-k"/><path class="az5r9nb_t"/><g class="jn8qy4bru"><path class="xqp3lqbhw"/><path class="mewnltmzk"/><path class="si33jlbhj"/></g>`,
		"fallback": "openmoji:mouse",
	});
}

export default Component;
