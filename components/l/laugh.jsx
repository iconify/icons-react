import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/f/fo9yszbmy.css';
import '../../css/s/sqrlkibif.css';
import '../../css/c/clwb_3bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="fo9yszbmy"/><path class="sqrlkibif"/><path class="clwb_3bij"/></g>`,
		"fallback": "withicons-brutal:laugh",
	});
}

export default Component;
