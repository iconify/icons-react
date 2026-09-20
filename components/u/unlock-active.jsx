import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awpepgb2e.css';
import '../../css/i/imy59jyxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="awpepgb2e"/><path clip-rule="evenodd" class="imy59jyxo"/></g>`,
		"fallback": "nrk:unlock-active",
	});
}

export default Component;
