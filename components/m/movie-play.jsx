import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f0q9z6r9j.css';
import '../../css/n/nke5d1h5y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f0q9z6r9j"/><path class="nke5d1h5y"/></g>`,
		"fallback": "si-glyph:movie-play",
	});
}

export default Component;
