import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sltdjjb5l.css';
import '../../css/y/yf6in5e9j.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="sltdjjb5l"/><path class="yf6in5e9j"/></g>`,
		"fallback": "si-glyph:stele",
	});
}

export default Component;
