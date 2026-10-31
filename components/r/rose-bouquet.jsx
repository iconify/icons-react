import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/msfhke2fa.css';
import '../../css/c/cpv391b8c.css';
import '../../css/j/j40jjjdlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="msfhke2fa wm-shadow"/><path class="cpv391b8c wm-shadow"/><path class="j40jjjdlq"/></g>`,
		"fallback": "withicons-brutal:rose-bouquet",
	});
}

export default Component;
