import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kaxks3b_j.css';
import '../../css/a/ac9g7ccxo.css';
import '../../css/q/qn20qiblg.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kaxks3b_j"/><path clip-rule="evenodd" class="ac9g7ccxo"/><path clip-rule="evenodd" class="qn20qiblg"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-mixed-invalid-rectangular2x-outline",
	});
}

export default Component;
