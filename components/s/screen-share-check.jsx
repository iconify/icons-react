import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fsb5jkb2h.css';
import '../../css/b/b69e8vbjp.css';
import '../../css/v/v0f1cbbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fsb5jkb2h"/><path class="b69e8vbjp"/><path class="v0f1cbbgj"/></g>`,
		"fallback": "andrsrxn:screen-share-check",
	});
}

export default Component;
