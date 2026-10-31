import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wh57_5bcq.css';
import '../../css/v/vmqfy_b3m.css';
import '../../css/j/jcqg-0-xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wh57_5bcq wm-shadow"/><path class="vmqfy_b3m wm-shadow"/><path class="jcqg-0-xx"/></g>`,
		"fallback": "withicons-brutal:rangoli-pattern",
	});
}

export default Component;
