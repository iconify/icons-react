import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bty7goz2u.css';
import '../../css/y/y4wajacpa.css';
import '../../css/h/hbz7a9b5r.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bty7goz2u"/><path class="y4wajacpa"/><path class="hbz7a9b5r"/></g>`,
		"fallback": "si-glyph:sign-board",
	});
}

export default Component;
