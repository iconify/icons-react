import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h-satobgp.css';
import '../../css/p/ptxldtbxo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="h-satobgp"/><path class="ptxldtbxo"/></g>`,
		"fallback": "icon-park-solid:vip",
	});
}

export default Component;
