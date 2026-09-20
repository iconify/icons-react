import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t485pz2ch.css';
import '../../css/y/y8ihhd1pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t485pz2ch"/><path class="y8ihhd1pa"/></g>`,
		"fallback": "nrk:sign-language",
	});
}

export default Component;
