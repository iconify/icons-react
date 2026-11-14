import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/epf41k61m.css';
import '../../css/j/j_x2ft9pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="epf41k61m"/><path class="j_x2ft9pl"/></g>`,
		"fallback": "codex:volume",
	});
}

export default Component;
