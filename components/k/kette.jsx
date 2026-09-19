import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bspnmyb4c.css';
import '../../css/m/m_1-mhw8e.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="bspnmyb4c"/><path class="m_1-mhw8e"/></g>`,
		"fallback": "si-glyph:kette",
	});
}

export default Component;
