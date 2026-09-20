import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wylcycc3o.css';
import '../../css/u/u-5z2xbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wylcycc3o"/><path class="u-5z2xbpo"/></g>`,
		"fallback": "tdesign:user-unlocked",
	});
}

export default Component;
