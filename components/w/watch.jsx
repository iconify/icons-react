import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dz34nf4-z.css';
import '../../css/k/kf4ztjbqq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dz34nf4-z"/><path class="kf4ztjbqq"/></g>`,
		"fallback": "si-glyph:watch",
	});
}

export default Component;
