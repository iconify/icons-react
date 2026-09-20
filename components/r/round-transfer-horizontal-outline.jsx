import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sbgj8s2qu.css';
import '../../css/p/pt8vy25om.css';
import '../../css/n/ngi9mvb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sbgj8s2qu"/><path class="pt8vy25om"/><path class="ngi9mvb6m"/></g>`,
		"fallback": "solar:round-transfer-horizontal-outline",
	});
}

export default Component;
