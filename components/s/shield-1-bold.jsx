import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxt-8lmwo.css';
import '../../css/i/io136vrpn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fxt-8lmwo"/><path class="io136vrpn"/></g>`,
		"fallback": "glyphs:shield-1-bold",
	});
}

export default Component;
