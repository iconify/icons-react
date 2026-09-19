import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nel0phbwq.css';
import '../../css/i/i3g4ynr5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nel0phbwq"/><path class="i3g4ynr5b"/></g>`,
		"fallback": "icon-park-outline:skate",
	});
}

export default Component;
