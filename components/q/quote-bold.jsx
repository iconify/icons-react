import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smgzgcbpq.css';
import '../../css/j/jt1js_paa.css';
import '../../css/s/sk8-i7dpz.css';
import '../../css/j/js6g9scdr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="smgzgcbpq"/><path class="jt1js_paa"/><path clip-rule="evenodd" class="sk8-i7dpz"/><path class="js6g9scdr"/></g>`,
		"fallback": "glyphs:quote-bold",
	});
}

export default Component;
