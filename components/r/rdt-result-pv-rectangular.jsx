import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_j-gqblx.css';
import '../../css/o/ox3ezrunz.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_j-gqblx"/><path clip-rule="evenodd" class="ox3ezrunz"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-pv-rectangular",
	});
}

export default Component;
