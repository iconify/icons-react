import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3g49_bjy.css';
import '../../css/h/hstg4kb0i.css';
import '../../css/d/d-d8bbb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3g49_bjy"/><path class="hstg4kb0i"/><rect class="d-d8bbb3l"/></g>`,
		"fallback": "lets-icons:package-box",
	});
}

export default Component;
