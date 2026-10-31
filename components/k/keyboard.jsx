import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t-qhqabuj.css';
import '../../css/l/ldidohb6k.css';
import '../../css/d/ddu-bcw9l.css';
import '../../css/c/cn4uh2bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="t-qhqabuj wm-shadow"/><path class="ldidohb6k wm-shadow"/><path class="ddu-bcw9l"/><path class="cn4uh2bns"/></g>`,
		"fallback": "withicons-brutal:keyboard",
	});
}

export default Component;
