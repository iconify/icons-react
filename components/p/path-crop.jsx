import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nfxu5xbhe.css';
import '../../css/u/unstwqb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nfxu5xbhe"/><path clip-rule="evenodd" class="unstwqb-y"/></g>`,
		"fallback": "gg:path-crop",
	});
}

export default Component;
