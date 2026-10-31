import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b-hk6xuyl.css';
import '../../css/u/u5ilajbse.css';
import '../../css/s/s5-crub1t.css';
import '../../css/s/s8sl42beo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b-hk6xuyl wm-shadow"/><path class="u5ilajbse wm-shadow"/><path class="s5-crub1t"/><path class="s8sl42beo"/></g>`,
		"fallback": "withicons-brutal:sun-dim",
	});
}

export default Component;
