import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwyczob2v.css';
import '../../css/f/fk9x8xbji.css';
import '../../css/r/rryq7zaqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwyczob2v"/><path class="fk9x8xbji"/><path class="rryq7zaqo"/></g>`,
		"fallback": "andrsrxn:sign-in",
	});
}

export default Component;
