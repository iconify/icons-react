import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnd_dgu3m.css';
import '../../css/g/g1q2j2bas.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cnd_dgu3m"/><path class="g1q2j2bas"/></g>`,
		"fallback": "glyphs:pin-1-bold",
	});
}

export default Component;
