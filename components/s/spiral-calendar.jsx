import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4i3ki2pe.css';
import '../../css/y/ytap47bzk.css';
import '../../css/a/auwbpk90i.css';
import '../../css/y/y36jsip8b.css';
import '../../css/j/jv9kx2t7r.css';
import '../../css/f/f0t418b2f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4i3ki2pe"/><path class="ytap47bzk"/><path class="auwbpk90i"/><path class="y36jsip8b"/><path class="jv9kx2t7r"/><path class="f0t418b2f"/></g>`,
		"fallback": "fluent-emoji-flat:spiral-calendar",
	});
}

export default Component;
