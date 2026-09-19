import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xbyyhd70w.css';
import '../../css/t/t047zkbet.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xbyyhd70w"/><path clip-rule="evenodd" class="t047zkbet"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-neg",
	});
}

export default Component;
