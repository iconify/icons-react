import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgm_jcctn.css';
import '../../css/c/ci6mbbc_m.css';
import '../../css/b/br6ab8rnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgm_jcctn"/><path class="ci6mbbc_m"/><path class="br6ab8rnu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-gesturing-no",
	});
}

export default Component;
