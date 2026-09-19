import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1rx-ivkk.css';
import '../../css/e/ekv93tbmp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f1rx-ivkk"/><path clip-rule="evenodd" class="ekv93tbmp"/></g>`,
		"fallback": "healthicons:medicines2x-outline",
	});
}

export default Component;
