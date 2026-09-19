import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lva0ikbbf.css';
import '../../css/q/qceb8-waz.css';
import '../../css/p/pmbl1abpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lva0ikbbf"/><path class="qceb8-waz"/><path clip-rule="evenodd" class="pmbl1abpf"/></g>`,
		"fallback": "healthicons:medicines",
	});
}

export default Component;
