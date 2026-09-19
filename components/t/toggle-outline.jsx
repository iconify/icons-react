import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/al1t21i5l.css';
import '../../css/w/wi6gu6bfm.css';
import '../../css/g/g5mtd3btz.css';
import '../../css/k/kqy7zwb1l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="al1t21i5l"/><path class="wi6gu6bfm"/><path class="g5mtd3btz"/><path class="kqy7zwb1l"/></g>`,
		"fallback": "glyphs:toggle-outline",
	});
}

export default Component;
