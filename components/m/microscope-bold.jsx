import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owgq43b1u.css';
import '../../css/l/lmb9nrbxa.css';
import '../../css/g/gwkwatchw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="owgq43b1u"/><path clip-rule="evenodd" class="lmb9nrbxa"/><path class="gwkwatchw"/></g>`,
		"fallback": "glyphs:microscope-bold",
	});
}

export default Component;
