import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rzglgbban.css';
import '../../css/k/kxheq592p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rzglgbban"/><path class="kxheq592p"/></g>`,
		"fallback": "si-glyph:stelescope",
	});
}

export default Component;
