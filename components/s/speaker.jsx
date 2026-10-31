import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lkqxq2b3p.css';
import '../../css/o/o4qxn0byw.css';
import '../../css/s/scznlvt6s.css';
import '../../css/m/mkcg5es5k.css';
import '../../css/a/a4pw0rb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lkqxq2b3p wm-shadow"/><path class="o4qxn0byw wm-shadow"/><path class="scznlvt6s"/><path class="mkcg5es5k"/><path class="a4pw0rb7q"/></g>`,
		"fallback": "withicons-brutal:speaker",
	});
}

export default Component;
