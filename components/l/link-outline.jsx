import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k1omykbrh.css';
import '../../css/w/wl7htwwai.css';
import '../../css/q/q-uzbtb2m.css';
import '../../css/q/qk7-e396t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k1omykbrh"/><path class="wl7htwwai"/><path class="q-uzbtb2m"/><path class="qk7-e396t"/></g>`,
		"fallback": "glyphs:link-outline",
	});
}

export default Component;
