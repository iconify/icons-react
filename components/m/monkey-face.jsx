import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnbjpsbvr.css';
import '../../css/u/uhoxfmboe.css';
import '../../css/q/qpa21bbij.css';
import '../../css/m/mm0rrvbhg.css';
import '../../css/t/tsquhwb9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnbjpsbvr"/><path class="uhoxfmboe"/><path class="qpa21bbij"/><path class="mm0rrvbhg"/><path class="tsquhwb9j"/></g>`,
		"fallback": "fluent-emoji-flat:monkey-face",
	});
}

export default Component;
