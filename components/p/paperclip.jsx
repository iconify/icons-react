import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sh06d-lgt.css';
import '../../css/a/ax79-fbtj.css';
import '../../css/o/opf-syz9t.css';
import '../../css/r/rfh4bmiht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sh06d-lgt wm-k"/><path class="ax79-fbtj wm-k"/><path class="opf-syz9t wm-k"/><path class="rfh4bmiht wm-shine"/></g>`,
		"fallback": "withicons-anime:paperclip",
	});
}

export default Component;
