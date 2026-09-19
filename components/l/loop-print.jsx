import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w09lmnx4l.css';
import '../../css/e/eicihhp-u.css';
import '../../css/s/s2w7n_bit.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w09lmnx4l"/><path clip-rule="evenodd" class="eicihhp-u"/><path class="s2w7n_bit"/></g>`,
		"fallback": "pepicons:loop-print",
	});
}

export default Component;
