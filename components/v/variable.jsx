import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w1hie5dyf.css';
import '../../css/z/zak1u-b3y.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="w1hie5dyf wm-k"/><path class="wm-a zak1u-b3y"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:variable",
	});
}

export default Component;
