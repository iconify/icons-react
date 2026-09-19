import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u7gemwb9q.css';
import '../../css/m/m6_rnhb7u.css';
import '../../css/s/sxb-9pbqm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u7gemwb9q"/><path class="m6_rnhb7u"/><path class="sxb-9pbqm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:monkey-face",
	});
}

export default Component;
