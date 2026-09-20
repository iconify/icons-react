import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whsw1jttk.css';
import '../../css/l/lwfur486u.css';
import '../../css/t/te8kfhm0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whsw1jttk"/><path class="lwfur486u"/><path class="te8kfhm0b"/></g>`,
		"fallback": "streamline-flex-color:search-history-browser",
	});
}

export default Component;
