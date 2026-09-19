import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tq71b84bu.css';
import '../../css/j/jr20aub9c.css';
import '../../css/m/m5ixigb2w.css';
import '../../css/x/xuu65oubr.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tq71b84bu"/><path class="jr20aub9c"/><path class="m5ixigb2w"/><path class="xuu65oubr"/></g>`,
		"fallback": "flagpack:vc",
	});
}

export default Component;
