import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cx-nyjb0i.css';
import '../../css/w/we-2zfbzo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cx-nyjb0i"/><path class="we-2zfbzo"/></g>`,
		"fallback": "si-glyph:telescope",
	});
}

export default Component;
