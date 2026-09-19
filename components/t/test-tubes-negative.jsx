import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhjy4vbpp.css';
import '../../css/h/h69crfbsf.css';
import '../../css/b/bo4bwebeu.css';
import '../../css/k/kdvcz7bsx.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsTestTubesNegative0)" class="cuyn6tgcc"><path class="xhjy4vbpp"/><path class="h69crfbsf"/><path class="bo4bwebeu"/><path clip-rule="evenodd" class="kdvcz7bsx"/></g><defs><clipPath id="healthiconsTestTubesNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:test-tubes-negative",
	});
}

export default Component;
