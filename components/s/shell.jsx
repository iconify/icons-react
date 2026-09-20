import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s59tkkbss.css';
import '../../css/u/ug24e7c6s.css';
import '../../css/c/ckeccxbty.css';
import '../../css/e/e3k9aeb1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s59tkkbss"/><path class="ug24e7c6s"/><path class="ckeccxbty"/><path class="e3k9aeb1g"/></g>`,
		"fallback": "streamline-color:shell",
	});
}

export default Component;
