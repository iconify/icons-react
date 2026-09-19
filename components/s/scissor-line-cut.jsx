import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wigb2pkkh.css';
import '../../css/p/pmkj7pb6y.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="wigb2pkkh"/><path class="pmkj7pb6y"/></g>`,
		"fallback": "si-glyph:scissor-line-cut",
	});
}

export default Component;
