import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h-_w6vbdw.css';
import '../../css/r/rswnm016d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h-_w6vbdw"/><path class="rswnm016d"/></g>`,
		"fallback": "glyphs:keyboard-bold",
	});
}

export default Component;
