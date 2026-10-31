import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bk0mirbro.css';
import '../../css/g/g6_vs9ynd.css';
import '../../css/o/opmvrxb9o.css';
import '../../css/d/dnvwyvf3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bk0mirbro wm-shadow"/><path class="g6_vs9ynd wm-shadow"/><path class="opmvrxb9o"/><path class="dnvwyvf3e"/></g>`,
		"fallback": "withicons-brutal:microphone",
	});
}

export default Component;
