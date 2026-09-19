import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ydgrp1jah.css';
import '../../css/t/t0y9mplzu.css';
import '../../css/v/vspy1i70d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ydgrp1jah"/><path class="t0y9mplzu"/><path class="vspy1i70d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-beard",
	});
}

export default Component;
