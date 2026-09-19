import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c1fs84bou.css';
import '../../css/w/wnyyyxbtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="c1fs84bou"/><path class="wnyyyxbtx"/></g>`,
		"fallback": "healthicons:laryngoscope-outline",
	});
}

export default Component;
