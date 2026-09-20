import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5zo75aqj.css';
import '../../css/q/q703-ub_o.css';
import '../../css/n/n2edx8btc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k5zo75aqj"/><path clip-rule="evenodd" class="q703-ub_o"/><path class="n2edx8btc"/></g>`,
		"fallback": "streamline-plump-color:magic-wand-1-flat",
	});
}

export default Component;
