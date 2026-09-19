import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8f7u0bby.css';
import '../../css/t/t002y2qal.css';
import '../../css/s/sgaaagkzw.css';
import '../../css/v/vl_70lije.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r8f7u0bby"/><path clip-rule="evenodd" class="t002y2qal"/><path clip-rule="evenodd" class="sgaaagkzw"/><path class="vl_70lije"/></g>`,
		"fallback": "healthicons:rdt-result-outline",
	});
}

export default Component;
