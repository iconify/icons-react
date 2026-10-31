import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ary352b0b.css';
import '../../css/t/thwb4y3ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ary352b0b"/><path class="thwb4y3ol"/></g>`,
		"fallback": "coolicons:ship-duotone-round",
	});
}

export default Component;
