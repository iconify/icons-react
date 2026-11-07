import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb1rgbcrq.css';
import '../../css/r/rihb8_rrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yb1rgbcrq"/><path class="rihb8_rrd"/>`,
		"fallback": "solar:paperclip-2-bold-duotone",
	});
}

export default Component;
