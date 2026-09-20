import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dmq0fwbzw.css';
import '../../css/q/qf1bm1btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dmq0fwbzw"/><path class="qf1bm1btr"/></g>`,
		"fallback": "streamline-plump-color:thermometer-flat",
	});
}

export default Component;
