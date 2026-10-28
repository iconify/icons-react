import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um_si5o0k.css';
import '../../css/w/w755xk_8f.css';
import '../../css/n/nw4h7ac-q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="um_si5o0k"><path class="w755xk_8f"/><path class="nw4h7ac-q"/></g>`,
		"fallback": "material-icon-theme:otne",
	});
}

export default Component;
