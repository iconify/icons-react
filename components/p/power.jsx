import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kqnnqbtyh.css';
import '../../css/y/yn78k0eyo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kqnnqbtyh"/><path class="yn78k0eyo"/></g>`,
		"fallback": "bi:power",
	});
}

export default Component;
