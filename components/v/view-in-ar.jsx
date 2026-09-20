import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2s8ro2vs.css';
import '../../css/c/cltgzxbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o2s8ro2vs"/><path class="cltgzxbgn"/></g>`,
		"fallback": "tdesign:view-in-ar",
	});
}

export default Component;
