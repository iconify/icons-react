import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g2g8mcbuf.css';
import '../../css/q/q_m6zyuou.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="g2g8mcbuf"/><path class="q_m6zyuou"/></g>`,
		"fallback": "glyphs-poly:times",
	});
}

export default Component;
