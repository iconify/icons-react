import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obzzdc8xv.css';
import '../../css/c/ci9c0bbqn.css';
import '../../css/s/stlxiq1mc.css';
import '../../css/x/xnz77bczq.css';
import '../../css/j/jypze3b0o.css';
import '../../css/z/zg3ndtsqd.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="obzzdc8xv"/><path class="ci9c0bbqn"/><path class="stlxiq1mc"/><path class="xnz77bczq"/><path class="jypze3b0o"/><path clip-rule="evenodd" class="zg3ndtsqd"/></g>`,
		"fallback": "flagpack:lk",
	});
}

export default Component;
