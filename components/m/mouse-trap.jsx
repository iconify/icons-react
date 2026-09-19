import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf9jhmmtr.css';
import '../../css/t/t8xrghbkk.css';
import '../../css/o/oawras38v.css';
import '../../css/e/eqakx3b5l.css';
import '../../css/t/tyd2ck6ux.css';
import '../../css/c/ca4462bro.css';
import '../../css/j/jgam23o1x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf9jhmmtr"/><path class="t8xrghbkk"/><path class="oawras38v"/><path class="eqakx3b5l"/><path class="tyd2ck6ux"/><path class="ca4462bro"/><path class="jgam23o1x"/></g>`,
		"fallback": "fluent-emoji-flat:mouse-trap",
	});
}

export default Component;
