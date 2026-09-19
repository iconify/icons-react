import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaxks3b_j.css';
import '../../css/e/ekel2ht7q.css';
import '../../css/a/ai8-xbc-x.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kaxks3b_j"/><path clip-rule="evenodd" class="ekel2ht7q"/><path clip-rule="evenodd" class="ai8-xbc-x"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-pf-outline",
	});
}

export default Component;
