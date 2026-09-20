import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7vbzuguv.css';
import '../../css/p/p6hck1blo.css';
import '../../css/b/bx67anwvz.css';
import '../../css/b/bvisy3whf.css';
import '../../css/w/w83w87a_a.css';
import '../../css/g/g8x168b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7vbzuguv"/><path class="p6hck1blo"/><path class="bx67anwvz"/><path class="bvisy3whf"/><path class="w83w87a_a"/><path class="g8x168b0u"/></g>`,
		"fallback": "solar:ruler-bold-duotone",
	});
}

export default Component;
