import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/ywal2zbon.css';
import '../../css/j/jied2xsjb.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ywal2zbon"/><path class="jied2xsjb"/><path class="dx93_50hj"/></g>`,
		"fallback": "keyline-icons:test-tube-sharp-duotone",
	});
}

export default Component;
