import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nas9yabzy.css';
import '../../css/n/ng73a_k1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nas9yabzy"/><path class="ng73a_k1g"/></g>`,
		"fallback": "si-glyph:stereo-jack",
	});
}

export default Component;
