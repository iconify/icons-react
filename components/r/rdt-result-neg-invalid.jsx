import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/orag1morv.css';
import '../../css/p/ph3hdab0i.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="orag1morv"/><path clip-rule="evenodd" class="ph3hdab0i"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-neg-invalid",
	});
}

export default Component;
