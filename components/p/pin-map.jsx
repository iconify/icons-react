import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oof0eec8d.css';
import '../../css/m/m0fm8jb3h.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="oof0eec8d"/><path class="m0fm8jb3h"/></g>`,
		"fallback": "si-glyph:pin-map",
	});
}

export default Component;
