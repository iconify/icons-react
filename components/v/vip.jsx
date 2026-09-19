import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j6kxyub6h.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j6kxyub6h"/><path class="ptxldtbxo"/></g>`,
		"fallback": "icon-park-outline:vip",
	});
}

export default Component;
