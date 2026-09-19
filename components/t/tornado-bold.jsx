import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sovy61-7k.css';
import '../../css/j/js5r8hjtc.css';
import '../../css/h/hvqpucqhf.css';
import '../../css/i/i_fevuidw.css';
import '../../css/i/i47ie_bvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="sovy61-7k"/><path clip-rule="evenodd" class="js5r8hjtc"/><path clip-rule="evenodd" class="hvqpucqhf"/><path clip-rule="evenodd" class="i_fevuidw"/><path clip-rule="evenodd" class="i47ie_bvz"/></g>`,
		"fallback": "glyphs:tornado-bold",
	});
}

export default Component;
