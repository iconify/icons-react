import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v21nirblw.css';
import '../../css/c/cw3od-szd.css';
import '../../css/d/d6gi73mnm.css';
import '../../css/e/ensf0pusy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v21nirblw"/><path class="cw3od-szd"/><path class="d6gi73mnm"/><path class="ensf0pusy"/></g>`,
		"fallback": "andrsrxn:message-sparkle",
	});
}

export default Component;
