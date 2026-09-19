import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dejwuwb6s.css';
import '../../css/a/a3u2useig.css';
import '../../css/p/p_yrccbjb.css';
import '../../css/d/d6zxgccaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsRdtResultNoTestNegative0)" class="cuyn6tgcc"><path class="dejwuwb6s"/><path clip-rule="evenodd" class="a3u2useig"/><path clip-rule="evenodd" class="p_yrccbjb"/></g><defs><clipPath id="healthiconsRdtResultNoTestNegative0"><path class="d6zxgccaz"/></clipPath></defs></g>`,
		"fallback": "healthicons:rdt-result-no-test-negative",
	});
}

export default Component;
