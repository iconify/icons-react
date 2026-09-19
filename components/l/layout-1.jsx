import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wnip7db9k.css';
import '../../css/c/c30drv6-g.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wnip7db9k"/><path class="c30drv6-g"/></g>`,
		"fallback": "si-glyph:layout-1",
	});
}

export default Component;
