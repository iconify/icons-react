import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p83ibjbgx.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/m/mpei81s8z.css';
import '../../css/v/v41lcbbao.css';
import '../../css/z/zb1fw-bde.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p83ibjbgx"/><g class="sxsjrzbyv"><path class="mpei81s8z"/><path clip-rule="evenodd" class="v41lcbbao"/><path clip-rule="evenodd" class="zb1fw-bde"/></g>`,
		"fallback": "openmoji:typescript",
	});
}

export default Component;
