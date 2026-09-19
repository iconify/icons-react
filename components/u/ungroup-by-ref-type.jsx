import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iua0p6vky.css';
import '../../css/u/ulzgaspjq.css';
import '../../css/s/stcekdbwb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iua0p6vky"/><path clip-rule="evenodd" class="ulzgaspjq"/><path class="stcekdbwb"/></g>`,
		"fallback": "codicon:ungroup-by-ref-type",
	});
}

export default Component;
