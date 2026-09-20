import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f51qmwf-q.css';
import '../../css/s/s8cwe32um.css';
import '../../css/b/bg033vbmv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f51qmwf-q"/><path class="s8cwe32um"/><path class="bg033vbmv"/></g>`,
		"fallback": "streamline-color:markdown-document-programming",
	});
}

export default Component;
