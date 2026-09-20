import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3gitem4j.css';
import '../../css/v/v4plbbb0g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y3gitem4j"/><path class="v4plbbb0g"/></g>`,
		"fallback": "streamline-flex-color:new-badge-highlight",
	});
}

export default Component;
