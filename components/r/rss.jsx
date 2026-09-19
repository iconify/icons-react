import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s69aqabod.css';
import '../../css/e/eak5yhtvh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s69aqabod"/><path class="eak5yhtvh"/></g>`,
		"fallback": "si-glyph:rss",
	});
}

export default Component;
