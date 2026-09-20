import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffshe1a3t.css';
import '../../css/y/yiyj44ijg.css';
import '../../css/c/c0t05sg1n.css';
import '../../css/g/g-dnhn00c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ffshe1a3t"/><path class="yiyj44ijg"/><path class="c0t05sg1n"/><path class="g-dnhn00c"/></g>`,
		"fallback": "streamline-color:waiting-appointments-calendar",
	});
}

export default Component;
