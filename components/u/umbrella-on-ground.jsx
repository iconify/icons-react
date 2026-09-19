import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbrbpackc.css';
import '../../css/q/qppagbs6j.css';
import '../../css/s/sk554xd1s.css';
import '../../css/d/d63qckmho.css';
import '../../css/w/w5sk7xs8e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbrbpackc"/><path class="qppagbs6j"/><path class="sk554xd1s"/><path class="d63qckmho"/><path class="w5sk7xs8e"/></g>`,
		"fallback": "fluent-emoji-flat:umbrella-on-ground",
	});
}

export default Component;
