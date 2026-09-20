import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zt3p8jblu.css';
import '../../css/s/s0op7fbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zt3p8jblu"/><path class="s0op7fbav"/></g>`,
		"fallback": "tdesign:tower",
	});
}

export default Component;
