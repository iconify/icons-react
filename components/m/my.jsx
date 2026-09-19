import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjpfb2y-w.css';
import '../../css/r/rr6rd6brx.css';
import '../../css/t/t94b19a8b.css';
import '../../css/c/c53xnwbnr.css';
import '../../css/w/wwq-_b42s.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rjpfb2y-w"/><path class="rr6rd6brx"/><path class="t94b19a8b"/><path class="c53xnwbnr"/><path class="wwq-_b42s"/></g>`,
		"fallback": "cif:my",
	});
}

export default Component;
