import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/otrz1n7pe.css';
import '../../css/x/xhvyj69ys.css';
import '../../css/j/jvd558cyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="otrz1n7pe"/><path class="xhvyj69ys"/><path class="jvd558cyr"/></g>`,
		"fallback": "streamline-color:voice-mail-off-flat",
	});
}

export default Component;
