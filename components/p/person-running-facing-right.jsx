import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kgeg8qb_c.css';
import '../../css/h/hk4x32b-e.css';
import '../../css/z/zsm68ej_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kgeg8qb_c"/><path class="hk4x32b-e"/><path class="zsm68ej_i"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-running-facing-right",
	});
}

export default Component;
