import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aelzbn8rx.css';
import '../../css/s/sb-x83o_r.css';
import '../../css/b/bc946cccr.css';
import '../../css/e/e127cjtqd.css';
import '../../css/k/kmf5jfsoj.css';
import '../../css/a/ag76uw75h.css';
import '../../css/j/j0g8ylb3v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aelzbn8rx"/><path class="sb-x83o_r"/><path class="bc946cccr"/><path class="e127cjtqd"/><path class="kmf5jfsoj"/><path class="ag76uw75h"/><path class="j0g8ylb3v"/></g>`,
		"fallback": "fluent-emoji-flat:partying-face",
	});
}

export default Component;
