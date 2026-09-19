import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d2yls2r-x.css';
import '../../css/y/yrii_0zqo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d2yls2r-x"/><path class="yrii_0zqo"/></g>`,
		"fallback": "glyphs:tv-retro-bold",
	});
}

export default Component;
