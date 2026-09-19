import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/z/z4j9yhbxy.css';
import '../../css/f/f1r1xofwi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="z4j9yhbxy"/><path class="f1r1xofwi"/></g>`,
		"fallback": "glyphs:star-half-1",
	});
}

export default Component;
