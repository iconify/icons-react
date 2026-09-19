import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vf295n69d.css';
import '../../css/z/z9opg52kw.css';
import '../../css/r/r19h5x0po.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vf295n69d"/><path class="z9opg52kw"/><path class="r19h5x0po"/></g>`,
		"fallback": "si-glyph:lavabo",
	});
}

export default Component;
