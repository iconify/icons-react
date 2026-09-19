import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eknr0yb3q.css';
import '../../css/m/mthhcmfvq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="eknr0yb3q"/><path class="mthhcmfvq"/></g>`,
		"fallback": "si-glyph:strawberry",
	});
}

export default Component;
