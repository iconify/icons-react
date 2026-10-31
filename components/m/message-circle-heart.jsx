import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y81dwzzkb.css';
import '../../css/d/dmkqfxb0z.css';
import '../../css/z/zc4_ocb5k.css';
import '../../css/c/c3ohxh77o.css';
import '../../css/z/zm5_xlbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow y81dwzzkb"/><path class="dmkqfxb0z wm-shadow"/><path class="zc4_ocb5k"/><path class="c3ohxh77o"/><path class="zm5_xlbin"/></g>`,
		"fallback": "withicons-brutal:message-circle-heart",
	});
}

export default Component;
