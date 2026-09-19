import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpfsi5rhm.css';
import '../../css/i/idgbs_kvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mpfsi5rhm"/><path class="idgbs_kvi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:military-medal",
	});
}

export default Component;
