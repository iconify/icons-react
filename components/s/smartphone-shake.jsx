import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x7jeq1w3z.css';
import '../../css/j/jnwb-clph.css';
import '../../css/i/iccdh9bgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x7jeq1w3z"/><path clip-rule="evenodd" class="jnwb-clph"/><path class="iccdh9bgu"/></g>`,
		"fallback": "gg:smartphone-shake",
	});
}

export default Component;
