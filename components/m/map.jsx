import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgfc6ubca.css';
import '../../css/d/d1ut_2acl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dgfc6ubca"/><path class="d1ut_2acl"/></g>`,
		"fallback": "andrsrxn:map",
	});
}

export default Component;
