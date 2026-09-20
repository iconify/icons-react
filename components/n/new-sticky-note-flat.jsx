import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr6rlqogt.css';
import '../../css/p/pxz-cfbxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tr6rlqogt"/><path class="pxz-cfbxy"/></g>`,
		"fallback": "streamline-flex-color:new-sticky-note-flat",
	});
}

export default Component;
