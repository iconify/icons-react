import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v0rm_8b1g.css';
import '../../css/g/gbi6cgipz.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v0rm_8b1g"/><path class="gbi6cgipz"/></g>`,
		"fallback": "si-glyph:sewing-roll",
	});
}

export default Component;
