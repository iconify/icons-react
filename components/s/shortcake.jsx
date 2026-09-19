import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1q5ojbym.css';
import '../../css/u/u_m6y0bod.css';
import '../../css/o/og2i17bwk.css';
import '../../css/b/b4fcz99pg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h1q5ojbym"/><path class="u_m6y0bod"/><path class="og2i17bwk"/><path class="b4fcz99pg"/></g>`,
		"fallback": "fluent-emoji-flat:shortcake",
	});
}

export default Component;
