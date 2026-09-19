import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ej8r1sbkb.css';
import '../../css/s/s87qpyiov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ej8r1sbkb"/><path class="s87qpyiov"/></g>`,
		"fallback": "si-glyph:star-stick",
	});
}

export default Component;
