import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w7qbk-blj.css';
import '../../css/c/ccp-xwqss.css';
import '../../css/y/yk72itc7j.css';
import '../../css/o/odprduh0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w7qbk-blj wm-shadow"/><path class="ccp-xwqss wm-shadow"/><path class="yk72itc7j"/><path class="odprduh0q"/></g>`,
		"fallback": "withicons-brutal:magnet",
	});
}

export default Component;
