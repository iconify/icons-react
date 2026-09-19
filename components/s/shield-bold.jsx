import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n97odxooa.css';
import '../../css/w/wng7u1bbn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n97odxooa"/><path class="wng7u1bbn"/></g>`,
		"fallback": "glyphs:shield-bold",
	});
}

export default Component;
