import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jjk1_ku9t.css';
import '../../css/m/m2ray9b6i.css';
import '../../css/q/qahu-cxms.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jjk1_ku9t"/><path class="m2ray9b6i"/><path class="qahu-cxms"/></g>`,
		"fallback": "pepicons:magnet-print",
	});
}

export default Component;
