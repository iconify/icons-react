import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/z/zi5e8o4jp.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/e/ef1s0yb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="zi5e8o4jp"/><path class="kacv-xbnn"/><path class="ef1s0yb5l"/></g>`,
		"fallback": "tdesign:roast",
	});
}

export default Component;
