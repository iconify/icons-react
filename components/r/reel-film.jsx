import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dhg4gt1-q.css';
import '../../css/v/v9v74fa0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dhg4gt1-q"/><path class="v9v74fa0z"/></g>`,
		"fallback": "si-glyph:reel-film",
	});
}

export default Component;
