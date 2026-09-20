import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oto2ahb8r.css';
import '../../css/n/nqay0i79z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oto2ahb8r"/><path class="nqay0i79z"/></g>`,
		"fallback": "reicon:ticket",
	});
}

export default Component;
