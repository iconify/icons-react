import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/n/na3dx1erd.css';
import '../../css/j/j697vbfod.css';
import '../../css/f/ffxn0rb1n.css';
import '../../css/k/khejtg7il.css';
import '../../css/m/mrxnzhbpk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><path class="na3dx1erd"/><path class="j697vbfod"/><path class="ffxn0rb1n"/><path class="khejtg7il"/><path class="mrxnzhbpk"/></g>`,
		"fallback": "gala:secure",
	});
}

export default Component;
