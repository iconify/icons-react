import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbg5d4pwg.css';
import '../../css/u/uhc_l5zqc.css';
import '../../css/s/sse0u-xjj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbg5d4pwg"/><path class="uhc_l5zqc"/><path class="sse0u-xjj"/></g>`,
		"fallback": "glyphs:qr-duo",
	});
}

export default Component;
