import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4i3ki2pe.css';
import '../../css/k/keqtz3bzj.css';
import '../../css/a/auwbpk90i.css';
import '../../css/y/y36jsip8b.css';
import '../../css/a/a40iuzmks.css';
import '../../css/n/nhzr-4i1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e4i3ki2pe"/><path class="keqtz3bzj"/><path class="auwbpk90i"/><path class="y36jsip8b"/><path class="a40iuzmks"/><path class="nhzr-4i1d"/></g>`,
		"fallback": "fluent-emoji-flat:tear-off-calendar",
	});
}

export default Component;
