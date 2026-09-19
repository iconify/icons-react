import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqopdobjp.css';
import '../../css/o/oqmq_zbkz.css';
import '../../css/e/ejgsjsb6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqopdobjp"><circle class="oqmq_zbkz"/><path class="ejgsjsb6o"/></g>`,
		"fallback": "flat-color-icons:music",
	});
}

export default Component;
