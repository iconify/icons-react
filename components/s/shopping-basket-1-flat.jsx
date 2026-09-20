import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znccgc22v.css';
import '../../css/g/g5hn99ttr.css';
import '../../css/l/lh250zf2y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="znccgc22v"/><path class="g5hn99ttr"/><path clip-rule="evenodd" class="lh250zf2y"/></g>`,
		"fallback": "streamline-plump-color:shopping-basket-1-flat",
	});
}

export default Component;
