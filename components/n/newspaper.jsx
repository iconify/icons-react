import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hn1whcc4k.css';
import '../../css/k/kftf4_-oi.css';
import '../../css/f/f6y_119-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hn1whcc4k"/><path class="kftf4_-oi"/><path class="f6y_119-b"/></g>`,
		"fallback": "andrsrxn:newspaper",
	});
}

export default Component;
