import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dw6v_abwc.css';
import '../../css/n/nqt_qpbxm.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dw6v_abwc"/><path clip-rule="evenodd" class="nqt_qpbxm"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-pf-rectangular",
	});
}

export default Component;
