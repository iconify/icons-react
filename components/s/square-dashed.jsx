import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/byy6wdbxw.css';
import '../../css/u/uo7v-mbdc.css';
import '../../css/e/e349cfoaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="byy6wdbxw wm-shadow"/><path class="uo7v-mbdc wm-shadow"/><path class="e349cfoaw"/></g>`,
		"fallback": "withicons-brutal:square-dashed",
	});
}

export default Component;
