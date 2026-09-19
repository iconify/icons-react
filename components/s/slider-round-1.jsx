import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zqbpy6boz.css';
import '../../css/z/zuoznrbss.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zqbpy6boz"/><path class="zuoznrbss"/></g>`,
		"fallback": "fad:slider-round-1",
	});
}

export default Component;
