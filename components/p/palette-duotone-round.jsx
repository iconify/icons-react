import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/beo71ab5k.css';
import '../../css/o/o1nlj2b_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="beo71ab5k"/><path class="o1nlj2b_t"/></g>`,
		"fallback": "coolicons:palette-duotone-round",
	});
}

export default Component;
