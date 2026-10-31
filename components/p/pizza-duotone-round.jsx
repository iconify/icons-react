import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hq82c3k-t.css';
import '../../css/r/rz5ntua9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hq82c3k-t"/><path class="rz5ntua9t"/></g>`,
		"fallback": "coolicons:pizza-duotone-round",
	});
}

export default Component;
