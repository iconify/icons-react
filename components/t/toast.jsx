import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z7_t-ub5k.css';
import '../../css/q/q3wy5r3wj.css';
import '../../css/i/i8nbo_yep.css';
import '../../css/j/jf2l-gfxq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="z7_t-ub5k"/><path class="q3wy5r3wj"/><path class="i8nbo_yep"/><path class="jf2l-gfxq"/></g>`,
		"fallback": "streamline-plump-color:toast",
	});
}

export default Component;
