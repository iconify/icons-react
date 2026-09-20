import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ywal2zbon.css';
import '../../css/w/wh1sq_bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ywal2zbon"/><path class="wh1sq_bdf"/></g>`,
		"fallback": "keyline-icons:test-tube-sharp-two-tone",
	});
}

export default Component;
