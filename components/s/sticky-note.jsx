import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nxjbdabzh.css';
import '../../css/v/vezblbb5g.css';
import '../../css/a/ajone6a4x.css';
import '../../css/q/qsgo5rxvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nxjbdabzh wm-shadow"/><path class="vezblbb5g wm-shadow"/><path class="ajone6a4x"/><path class="qsgo5rxvw"/></g>`,
		"fallback": "withicons-brutal:sticky-note",
	});
}

export default Component;
