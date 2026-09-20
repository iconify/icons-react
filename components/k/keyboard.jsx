import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knjrtpsva.css';
import '../../css/c/c-qxuxb6m.css';
import '../../css/x/xmhg6obja.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="knjrtpsva"/><path class="c-qxuxb6m"/><path class="xmhg6obja"/></g>`,
		"fallback": "streamline-flex-color:keyboard",
	});
}

export default Component;
