import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjodp-bjm.css';
import '../../css/y/ylo97-b1s.css';
import '../../css/z/zqe_q1umg.css';
import '../../css/e/eprqftj5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjodp-bjm"/><path class="ylo97-b1s"/><path class="zqe_q1umg"/><path class="eprqftj5s"/></g>`,
		"fallback": "tdesign:rice-ball",
	});
}

export default Component;
