import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f11kfjbkb.css';
import '../../css/x/xbxjxob8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f11kfjbkb"/><path class="xbxjxob8f"/></g>`,
		"fallback": "andrsrxn:phone-incoming",
	});
}

export default Component;
