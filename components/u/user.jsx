import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kpfehkbet.css';
import '../../css/c/chzh9e-8x.css';

const viewBox = {"width":18,"height":18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kpfehkbet"/><path class="chzh9e-8x"/></g>`,
		"fallback": "oui:user",
	});
}

export default Component;
