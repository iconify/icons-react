import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1oxt4voe.css';
import '../../css/p/py37p5bvs.css';
import '../../css/v/vm_1_tbws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1oxt4voe"/><path class="py37p5bvs"/><path class="vm_1_tbws"/></g>`,
		"fallback": "streamline-color:tag",
	});
}

export default Component;
