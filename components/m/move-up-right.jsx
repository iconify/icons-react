import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4pzxnkif.css';
import '../../css/k/k9f3s_clr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4pzxnkif"/><path class="k9f3s_clr"/></g>`,
		"fallback": "hugeicons:move-up-right",
	});
}

export default Component;
