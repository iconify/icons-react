import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qih0ynbyu.css';
import '../../css/k/kz6py0b6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qih0ynbyu"/><path class="kz6py0b6j"/></g>`,
		"fallback": "si-glyph:reel-audio",
	});
}

export default Component;
