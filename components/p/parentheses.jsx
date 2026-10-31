import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nd8oncbxa.css';
import '../../css/y/yailk0b5w.css';
import '../../css/m/mv53-jfge.css';
import '../../css/d/d8fckhbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nd8oncbxa wm-shadow"/><path class="wm-shadow yailk0b5w"/><path class="mv53-jfge"/><path class="d8fckhbji"/></g>`,
		"fallback": "withicons-brutal:parentheses",
	});
}

export default Component;
