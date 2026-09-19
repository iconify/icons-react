import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxqc7td9s.css';
import '../../css/k/kk3v77wva.css';
import '../../css/l/l5ct6wb_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxqc7td9s"/><path class="kk3v77wva"/><path class="l5ct6wb_y"/></g>`,
		"fallback": "fluent-emoji-flat:pinched-fingers",
	});
}

export default Component;
