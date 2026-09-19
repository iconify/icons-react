import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqfh5ojmb.css';
import '../../css/h/hsv1gfhcq.css';
import '../../css/z/z4cigfbsf.css';
import '../../css/x/xrnmq47gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qqfh5ojmb"/><circle class="hsv1gfhcq"/><circle class="z4cigfbsf"/><path class="xrnmq47gl"/></g>`,
		"fallback": "iconamoon:music-album-duotone",
	});
}

export default Component;
