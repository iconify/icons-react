import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kjc0fr6xx.css';
import '../../css/t/tzbmdywci.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kjc0fr6xx"/><path class="tzbmdywci"/></g>`,
		"fallback": "si-glyph:pick",
	});
}

export default Component;
