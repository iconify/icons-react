import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d0kbyjblt.css';
import '../../css/p/pr8jk-b5j.css';
import '../../css/k/kh37d4bji.css';
import '../../css/k/kifsyrbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d0kbyjblt"/><path class="pr8jk-b5j"/><path class="kh37d4bji"/><path class="kifsyrbmm"/></g>`,
		"fallback": "tdesign:palace-4",
	});
}

export default Component;
