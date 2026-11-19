import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re8-p8zeh.css';
import '../../css/d/d-q5cxb7z.css';
import '../../css/g/g7sss1zzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="re8-p8zeh"/><path class="d-q5cxb7z"/><path class="g7sss1zzb"/></g>`,
		"fallback": "andrsrxn:shield-sparkle",
	});
}

export default Component;
