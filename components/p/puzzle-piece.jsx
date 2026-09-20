import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4pxhybqf.css';
import '../../css/k/k8_kgmb2o.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/icah0vbzx.css';
import '../../css/c/cujl162ys.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4pxhybqf"/><path class="k8_kgmb2o"/><g class="jn8qy4bru"><path class="icah0vbzx"/><path class="cujl162ys"/></g>`,
		"fallback": "openmoji:puzzle-piece",
	});
}

export default Component;
