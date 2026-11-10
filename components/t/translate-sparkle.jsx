import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aj680abvv.css';
import '../../css/y/y9vobprdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aj680abvv"/><path class="y9vobprdm"/></g>`,
		"fallback": "andrsrxn:translate-sparkle",
	});
}

export default Component;
