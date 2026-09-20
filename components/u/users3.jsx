import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7-ubbcgv.css';
import '../../css/g/g0uevob0y.css';
import '../../css/r/rzuh_2b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s7-ubbcgv"/><path class="g0uevob0y"/><path clip-rule="evenodd" class="rzuh_2b1m"/></g>`,
		"fallback": "reicon:users3",
	});
}

export default Component;
