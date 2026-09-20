import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xh5-s8jmy.css';
import '../../css/e/er1u1bb_c.css';
import '../../css/e/e-hg7fm7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xh5-s8jmy"/><path class="er1u1bb_c"/><path class="e-hg7fm7t"/></g>`,
		"fallback": "streamline-freehand-color:movies-clapboard",
	});
}

export default Component;
