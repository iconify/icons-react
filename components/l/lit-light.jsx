import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qypeg9b1z.css';
import '../../css/r/r0ltr1bgi.css';
import '../../css/w/wkpjg4h8o.css';
import '../../css/v/v7_8tb8ig.css';
import '../../css/r/riryhhbue.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qypeg9b1z"/><path class="r0ltr1bgi"/><path class="wkpjg4h8o"/><path class="v7_8tb8ig"/><path class="riryhhbue"/></g>`,
		"fallback": "skill-icons:lit-light",
	});
}

export default Component;
