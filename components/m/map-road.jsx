import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pjgrm-bon.css';
import '../../css/p/pl_657gxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pjgrm-bon"/><path class="pl_657gxa"/></g>`,
		"fallback": "icon-park-outline:map-road",
	});
}

export default Component;
