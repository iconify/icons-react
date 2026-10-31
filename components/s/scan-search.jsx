import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/maxwkmbcq.css';
import '../../css/e/ef254wjso.css';
import '../../css/n/nogr2634v.css';
import '../../css/g/gvw3uib4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="maxwkmbcq wm-shadow"/><path class="ef254wjso wm-shadow"/><path class="nogr2634v"/><path class="gvw3uib4p"/></g>`,
		"fallback": "withicons-brutal:scan-search",
	});
}

export default Component;
