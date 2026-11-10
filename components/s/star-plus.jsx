import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vy3en0bni.css';
import '../../css/b/b72bjykxz.css';
import '../../css/a/ahk5yp70t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vy3en0bni"/><path class="b72bjykxz"/><path class="ahk5yp70t"/></g>`,
		"fallback": "andrsrxn:star-plus",
	});
}

export default Component;
