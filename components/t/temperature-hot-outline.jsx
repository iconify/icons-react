import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf_jk0b5q.css';
import '../../css/q/q44msqbev.css';
import '../../css/c/co51_lt9h.css';
import '../../css/r/rvb9hdc8g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kf_jk0b5q"/><path clip-rule="evenodd" class="q44msqbev"/><path class="co51_lt9h"/><path clip-rule="evenodd" class="rvb9hdc8g"/></g>`,
		"fallback": "glyphs:temperature-hot-outline",
	});
}

export default Component;
