import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hevf84mpc.css';
import '../../css/b/b-c2ieb3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hevf84mpc"/><path class="b-c2ieb3w"/></g>`,
		"fallback": "si-glyph:text-search",
	});
}

export default Component;
